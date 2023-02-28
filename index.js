/**
 * Server boilerplate and CLI functionality.
 * @module index
 */

const path = require('path');
const express = require('express'); // Web framework
const nunjucks = require('nunjucks'); // Templating engine
const { Sequelize, DataTypes } = require('sequelize'); // DB connection/migrations
const { Umzug, SequelizeStorage } = require('umzug'); // DB Migrations, sister lib to sequelize
const authMiddleware = require('./middleware/auth.js');
const cookieParser = require('cookie-parser');

const command = process.argv.length < 3 ? 'server' : process.argv[2];

/*
	TODO:
	- code reloading for routes
	- code reloading for models
*/

/**
 * HTTP Server settings
 * @typedef {object} HTTPServerSettings
 * @property {number} port - The port the server binds to
 */

/**
 * The settings Express.js uses to serve HTTP
 * @type {HTTPServerSettings}
 */
const settings = {
    port: 5000 // port the webapp listens on
};

/**
 * The connection parameters for connecting to the database.
 * @typedef {object} DatabaseSettings
 * @property {string} database Overridable via PGDATABASE
 * @property {string} username Overridable via PGUSER
 * @property {string} password Overridable via PGPASSWORD
 * @property {string} host Overridable via PGHOST
 */

/**
 * The settings used to connect to databases.
 * @type {DatabaseSettings}
 */
const databaseSettings = {
	database: process.env.PGDATABASE ?? 'tool-node',
	username: process.env.PGUSER ?? 'postgres',
	password: process.env.PGPASSWORD ?? 'password',
	host: process.env.PGHOST ?? 'localhost'
};

/**
 * Initializes a sequelize instance
 * @return {Sequelize} An instance of Sequelize that's ready to use.
 */
async function initSequelize() {
	const {database, username, password, host} = databaseSettings;

	// first, connect to postgres manually.
	const { Client } = require("pg");

	const client = new Client({
		user: username,
		password: password,
		host: host
	});
	await client.connect();

	// then, create the database specified in dbSettings.
	// if it fails, we're assuming it failed because the
	// database already exists.
	try {
		await client.query(`CREATE DATABASE "${database}";`);
	} catch (err) {};

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

/*
	const umzug = new Umzug({
		migrations: { glob: 'migrations/*.js' },
		context: sequelize.getQueryInterface(),
		storage: new SequelizeStorage({ sequelize: s }),
		logger: console,
	});

	await umzug.up();
*/
	return s;
}

/**
 * A middleware that renders a fancy error page
 * @param {Error} err The error that occurred
 * @param {Request} req The Express.js request
 * @param {Response} res The Express.js response that's being generated
 * @param {function} next A function from Express.js that continues routing
 */
function handleError(err, req, res, next) {
	console.error(err);
	res.status(500);
	res.render('error.html', {error: err});
	next();
}

/**
 * Starts the Express.js HTTP server.
 */
async function startServer() {
	const app = express();

	// Configure expressjs to use nunjucks when rendering html.
	nunjucks.configure(path.join(__dirname, 'templates'), {
		autoescape: true,
		express: app
	});

	const sequelize = await initSequelize();
	const models = require('./models.js')(sequelize, DataTypes); 
	await sequelize.sync();

	app.use(handleError);
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(authMiddleware(models.User));

	require('./routes.js')(app, models);

	app.use('/public', express.static(path.join(__dirname, "public")));
	app.use('/node_modules', express.static(path.join(__dirname, "node_modules"))); // dirty hack to allow serving JS from installed packages.

	// Starts the web server.
	await app.listen(settings.port);
	console.log(`tool-node is running on port ${settings.port}`);
}

/**
 * Starts the Sequelize shell
 */
async function startShell() {
	const sequelize = await initSequelize();
	const models = require('./models.js')(sequelize, DataTypes);
	await sequelize.sync();
	const repl = require('repl');
	const replServer = repl.start({prompt: "tool-shed> ", useGlobal: true});
	replServer.context.models = models;
	replServer.context.sequelize = sequelize;
}

if (command === 'server') {
	startServer();
} else if (command === 'shell') {
	startShell();
}
