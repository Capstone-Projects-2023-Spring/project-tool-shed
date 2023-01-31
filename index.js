const path = require('path');
const express = require('express'); // Web framework
const nunjucks = require('nunjucks'); // Templating engine
const { Sequelize } = require('sequelize'); // DB connection/migrations

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

	return new Sequelize({
		...dbSettings,
		dialect: 'postgres'
	});
}

async function main() {
	const app = express();

	// Configure expressjs to use nunjucks when rendering html.
	nunjucks.configure(path.join(__dirname, 'templates'), {
		autoescape: true,
		express: app
	});

	const sequelize = await initSequelize();
	const models = require('./models.js')(sequelize); 
	await sequelize.sync(); // run migrations

/*
	Routes
	If we start getting enough of these routes, we can
	figure out a way to split them apart and/or move them to
	their own file(s).
*/
	require('./routes.js')(app);
	app.get('/', (req, res) => {
		// render the template at templates/index.html with
		// the parameters world=WORLD.
		res.render('index.html', {world: "WORLD"});
	});

	// Starts the web server.
	await app.listen(settings.port);
	console.log(`tool-node is running on port ${settings.port}`);
}

main();
