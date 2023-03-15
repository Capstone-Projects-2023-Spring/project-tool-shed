const {startServer, startShell} = require('./boilerplate.js');
const dotenv = require('dotenv');

dotenv.config()

if (require.main === module) {
	const command = process.argv.length < 3 ? 'server' : process.argv[2];
	if (command === 'server') {
		startServer();
	} else if (command === 'shell') {
		startShell();
	}
}

module.exports = {
	startShell,
	startServer
}
