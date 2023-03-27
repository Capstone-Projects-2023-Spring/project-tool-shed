/**
 * @module boilerplate
 */

const path = require('path');
const multer = require('multer'); // File upload framework
const express = require('express'); // Web framework
const nunjucks = require('nunjucks'); // Templating engine
const { Sequelize, DataTypes } = require('sequelize'); // DB connection/migrations
const { MoldyMeat } = require('moldymeat');
const authMiddleware = require('./middleware/auth.js');
const cookieParser = require('cookie-parser');
const asyncHandler = require('express-async-handler');

/*
	TODO:
	- code reloading for routes
	- code reloading for models
*/

/**
 * The settings Express.js uses to serve HTTP
 * @type {object}
 * @property {number} port - The port the server binds to
 */
const settings = {
	port: process.env.PORT ?? 5000, // port the webapp listens on
	watchTemplates: false,
	cacheTemplates: true
};

/**
 * The connection parameters for connecting to the database.
 * @type {object}
 * @property {string} database Overridable via PGDATABASE
 * @property {string} username Overridable via PGUSER
 * @property {string} password Overridable via PGPASSWORD
 * @property {string} host Overridable via PGHOST
 */
const databaseSettings = {
	database: process.env.PGDATABASE ?? 'postgres',
	username: process.env.PGUSER ?? 'postgres',
	password: process.env.PGPASSWORD ?? 'postgres',
	host: process.env.PGHOST ?? 'localhost'
};

/**
 * Create middleware to render nunjucks templates.
 * @param {Express} app The express app you're adding things to.
 * @return {function} Middleware function
 */
function nunjucksMiddleware(app) {
	// Configure expressjs to use nunjucks when rendering html.
	const env = nunjucks.configure(path.join(__dirname, 'templates'), {
		autoescape: true,
		watch: settings.watchTemplates,
		throwOnUndefined: true,
		noCache: !settings.cacheTemplates,
		express: app
	});

	env.addFilter('json', function(value, spaces) {
		if (value instanceof nunjucks.runtime.SafeString) {
			value = value.toString();
		}
		const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c');
		return nunjucks.runtime.markSafe(jsonString);
	});

	return function(req, res, next) {
		env.addGlobal('authUser', req.user ?? null);
		next();
	};
}

/**
 * Sleeps.
 * @param {integer} ms How many milliseconds to sleep for.
 * @async
 */
async function sleep(ms) {
	return new Promise(x => setTimeout(x, ms));
}

/**
 * Initializes a sequelize instance. Loads models and syncs the database schema.
 * @return {Sequelize} An instance of Sequelize that's ready to use.
 * @async
 */
async function initSequelize() {
	const {database, username, password, host} = databaseSettings;

	// first, connect to postgres manually.
	const { Client } = require("pg");

	let client = null;

	for (let i = 10; i--;) {
		try {
			client = new Client({
				user: username,
				password,
				host
			});

			await client.connect();
			break;
		} catch (e) {
			await client.end();
			await sleep(1000);
		} 
	}

	// then, create the database specified in dbSettings.
	// if it fails, we're assuming it failed because the
	// database already exists.
	try {
		await client.query(`CREATE DATABASE "${database}";`);
	} catch (err) {};

	await client.end();

	let s = new Sequelize({
		database,
		username,
		password,
		host,
		dialect: 'postgres'
	});

	try {
		await s.authenticate();
	} catch (error) {
		console.log("Unable to connect to the database: ");
		console.log(error.message);
		process.exit(1);
	}

	await loadModels(s);
	await syncDatabase(s);

	return s;
}

/**
 * Loads model definitions
 * @param {Sequelize} sequelize The Sequelize instance to use
 * @returns {object} The models defined
 * @async
 */
async function loadModels(sequelize) {
	return require('./models.js')(sequelize); 
}

/**
 * Ensures the database tables match the models.
 * @param {Sequelize} sequelize The Sequelize instance to use
 * @async
 */
async function syncDatabase(sequelize) {
	// await sequelize.sync();

	const moldyMeat = new MoldyMeat({sequelize});
	await moldyMeat.initialize();
	await moldyMeat.updateSchema();
}

/**
 * Starts the Express.js HTTP server.
 * @async
 */
async function startServer() {
	const app = express();

	const uploadPath = path.join(__dirname, '.uploads');
	const uploadStorage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, uploadPath);
		},
		filename: (req, file, cb) => {
			const as = file.originalname.split('.');
			let ext = as.pop();
			ext = ext ? `.${ext}` : '';
			cb(null, `${as.join('.')}.${Math.round(Math.random() * 1E9)}${ext}`);
		}
	});
	app.upload = multer({storage: uploadStorage});

	const sequelize = await initSequelize();

	// middleware to respond to errors with page
	function handleError(err, req, res, next) {
		console.error(err);
		res.status(500);
		res.render('error.html', {error: err});
		next();
	}

	app.use(handleError);
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(authMiddleware(sequelize.models.User));
	app.use(nunjucksMiddleware(app));

	require('./routes.js')(app, sequelize.models);

	app.use('/files', express.static(uploadPath)); // serve files
	app.use('/public', express.static(path.join(__dirname, "public")));
	app.use('/webpack', express.static(path.join(__dirname, "webpack/dist")));
	app.use('/node_modules', express.static(path.join(__dirname, "node_modules"))); // dirty hack to allow serving JS from installed packages.

	// Starts the web server.
	await app.listen(settings.port);
	console.log(`tool-node is running on port ${settings.port}`);
}

/**
 * Starts the Sequelize shell
 * @async
 */
async function startShell() {
	const sequelize = await initSequelize();
	const repl = require('repl');
	const replServer = repl.start({prompt: "tool-shed> ", useGlobal: true});
	replServer.context.models = sequelize.models;
	replServer.context.sequelize = sequelize;
}

module.exports = {
	startShell,
	startServer,
	initSequelize,
	databaseSettings,
	settings
}
