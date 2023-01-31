# tool-node

Node backend for Toolshed.

## Requirements

All you need is a working docker install and node. You might need the developer libs
for postgresql, but try running the project first before worring about it.

## Running

	npm install
	npm run local

## Code Tree

    ./
    |   index.js # core webserver code
    |   models.js # where Sequelize models are defined
    |   routes.js # where routes are defined.
    |   scripts/ # devops scripts
    +-- templates/
    |   |  base.html # base template file
    |   |  ... more .html files that extend base.html
