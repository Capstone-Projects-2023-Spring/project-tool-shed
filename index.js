const path = require('path');
const express = require('express'); // Web framework
const nunjucks = require('nunjucks'); // Templating engine
const { Sequelize, DataTypes } = require('sequelize'); // DB connection/migrations
const { Umzug, SequelizeStorage } = require('umzug'); // DB Migrations, sister lib to sequelize
const authMiddleware = require('./middleware/auth.js');

/*
	index.js
	Runs the express server
*/

/*
	TODO:
	- code reloading for routes
*/

// HTTP Server config 
const settings = {
    port: 5000 // port the webapp listens on
};

const dbSettings = {
	database: 'tool-node',
	username: 'postgres',
	password: 'password',
	host: 'localhost',
}

async function initSequelize() {
	// first, connect to postgres manually.
	const { Client } = require("pg");

	const client = new Client({
		user: dbSettings.username,
		password: dbSettings.password,
		host: dbSettings.host
	});
	await client.connect();

	// then, create the database specified in dbSettings.
	// if it fails, we're assuming it failed because the
	// database already exists.
	try {
		await client.query(`CREATE DATABASE "${dbSettings.database}";`);
	} catch (err) {};

	let s = new Sequelize({
		...dbSettings,
		dialect: 'postgres'
	});

	try {
		await s.authenticate();
	} catch (error) {
		console.log("Unable to connect to the database: ");
		console.log(error.message);
		process.exit(1);
	}

	const umzug = new Umzug({
		migrations: { glob: 'migrations/*.js' },
		context: sequelize.getQueryInterface(),
		storage: new SequelizeStorage({ sequelize: s }),
		logger: console,
	});

	await umzug.up();

	return s;
}

function handleError(err, req, res, next) {
	console.error(err);
	res.status(500);
	app.render('error.html', {error: err});
	next();
}

async function startServer() {
	const app = express();

	// Configure expressjs to use nunjucks when rendering html.
	nunjucks.configure(path.join(__dirname, 'templates'), {
		autoescape: true,
		express: app
	});

	const sequelize = await initSequelize();
	const models = require('./models.js')(sequelize, DataTypes); 

	require('./routes.js')(app, models);

	app.use(handleError);
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(express.cookieParser());
	app.use(authMiddleware(models.User));
	app.use(express.static(__dirname + "public"));

	// Starts the web server.
	await app.listen(settings.port);
	console.log(`tool-node is running on port ${settings.port}`);
}

startServer();
