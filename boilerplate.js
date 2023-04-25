/**
 * @module boilerplate
 */

const path = require('path');
const fs = require('fs').promises;

const decache = require('decache'); // Allow us to reload code via require
const multer = require('multer'); // File upload framework
const express = require('express'); // Web framework
const nunjucks = require('nunjucks'); // Templating engine
const expressWs = require('express-ws'); // WebSockets
const { Sequelize, DataTypes } = require('sequelize'); // DB connection/migrations
const { MoldyMeat } = require('moldymeat'); // "migrations"

const authMiddleware = require('./middleware/auth.js');
const cookieParser = require('cookie-parser');
const asyncHandler = require('express-async-handler');
const debounce = require('debounce');
const dotenv = require('dotenv');

dotenv.config();

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
	cacheTemplates: process.env.CACHE_TEMPLATES ? process.env.CACHE_TEMPLATES === 'true' : false,
	reloadCode: process.env.RELOAD_CODE ? process.env.RELOAD_CODE === 'true' : true,
	uploadPath: process.env.UPLOAD_PATH ?? path.join(__dirname, '.uploads')
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
 * List of files to avoid watching.
 */
const watchIgnoreFiles = [
	'boilerplate.js',
	'models.js',
	'index.js',
	'webpack.config.js'	
];

async function waitForCodeChange() {
	return new Promise((resolve, reject) => {
		let finish = debounce(resolve, 200);
		let x = fs.watch(__dirname, {persistent: true}, (eventType, filename) => {
			let shouldReload = filename.endsWith('.js');
			shouldReload = shouldReload && !filename.endsWith('.test.js');
			shouldReload = shouldReload && !watchIgnoreFiles.includes(filename);
			if (shouldReload) {
				x.unref();
				finish(filename);
			}
		});
	});
}

function requireUncached(mod) {
	if (typeof jest !== 'undefined') {
		jest.resetModules();
	} else {
		decache(mod);
	}
	return require(mod);
}

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
 * Creates a database on the database server if it exists.
 * @param {string} dbname The name of the database to create
 * @async
 */
async function createDatabaseIfNotExists(dbname) {
	const {database, ...settings} = databaseSettings;
	const s = new Sequelize({
		dialect: 'postgres',
		...settings,
	});

	try {
		await s.getQueryInterface().createDatabase(dbname);
	} catch (e) {
		if (e.name !== 'SequelizeDatabaseError') {
			throw e;
		}
	} finally {
		await s.close();
	}
}

/**
 * Drops a database from the database server if it exists.
 * @param {string} dbname The name of the database to drop
 * @async
 */
async function dropDatabaseIfExists(dbname) {
	const {database, ...settings} = databaseSettings;
	const s = new Sequelize({
		dialect: 'postgres',
		...settings,
	});

	try {
		await s.getQueryInterface().dropDatabase(dbname);
	} catch (e) {
		if (e.name !== 'SequelizeDatabaseError') {
			throw e;
		}
	} finally {
		await s.close();
	}
}

/**
 * Initializes a sequelize instance. Loads models and syncs the database schema.
 * @return {Sequelize} An instance of Sequelize that's ready to use.
 * @async
 */
async function initSequelize(databaseName = null) {
	const s = new Sequelize({
		dialect: 'postgres',
		...databaseSettings,
		database: databaseName ?? databaseSettings.database
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
	return requireUncached('./models')(sequelize);
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

// middleware to respond to errors with page
function handleError(err, req, res, next) {
	console.error(err);
	res.status(500);
	res.render('error.html', {error: err});
	next();
}

/**
 * Builds an expressjs app
 * @returns {object} An Express.js app
 */
function buildExpressApp(sequelize) {
	const uploadStorage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, settings.uploadPath);
		},
		filename: (req, file, cb) => {
			const as = file.originalname.split('.');
			let ext = as.pop();
			ext = ext ? `.${ext}` : '';
			cb(null, `${as.join('.')}.${Math.round(Math.random() * 1E9)}${ext}`);
		}
	});
	const multerUpload = multer({storage: uploadStorage});

	const app = express();
	app.wsInstance = expressWs(app, undefined, {wsOptions: {clientTracking: true}});
	app.upload = multerUpload;

	app.use(handleError);
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(authMiddleware(sequelize.models.User));
	app.use(nunjucksMiddleware(app));

	requireUncached('./routes')(app, sequelize.models, sequelize);

	app.use('/uploads', express.static(settings.uploadPath)); // serve files
	app.use('/public', express.static(path.join(__dirname, "public")));
	app.use('/webpack', express.static(path.join(__dirname, "webpack/dist")));
	return app;
}

/**
 * Starts the Express.js HTTP server.
 * @async
 */
async function startServer() {
	const uploadExists = await fs.access(settings.uploadPath).then(() => true, () => false);
	if (!uploadExists) {
		await fs.mkdir(settings.uploadPath, {recursive: true});
	}
	
	const sequelize = await initSequelize();
	const runServer = async (mainSilent = false) => {
		const app = buildExpressApp(sequelize);

		// Starts the web server.
		const server = await app.listen(settings.port);
		if (!mainSilent) console.log(`tool-node is running on port ${settings.port}`);

		const shutDown = (silent = false) => new Promise((resolve, reject) => {
			if (!silent) console.log(`shutting down tool-node`);
			server.closeAllConnections();
			server.close(() => {
				if (!silent) console.log(`successfully shut down tool-node`);
				resolve();
			});
		});

		return shutDown;
	}

	let stopServer = null;
	if (settings.reloadCode) {
		stopServer = await runServer();
		while (true) {
			const changedFile = await waitForCodeChange();
			console.log(`${changedFile} was modified, reloading`);
			await stopServer(true);
			stopServer = await runServer(true);
		}
	} else {
		stopServer = await runServer();
	}

	const shutDown = () => stopServer().then(() => process.exit(0));
	
	process.on('SIGTERM', shutDown);
	process.on('SIGINT', shutDown);
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
	replServer.context.boilerplate = {
		startShell,
		startServer,
		initSequelize,
		databaseSettings,
		settings,
		buildExpressApp,
		createDatabaseIfNotExists
	};
}

module.exports = {
	startShell,
	startServer,
	initSequelize,
	databaseSettings,
	settings,
	buildExpressApp,
	createDatabaseIfNotExists,
	dropDatabaseIfExists
}
