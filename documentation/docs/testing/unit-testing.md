# Unit Testing

Unit testing is done via Jest. To create a new set of tests for a file called `example.js`, you'd write a file called `example.test.js`, which would `const {exportA, exportB, ...} = require("example.js");` and test what it exports.

To run the tests, **first make sure you have a database server running & the correct environment variables set** (otherwise, the tests won't be able to connect to a database, and they won't be able to be ran). Then run:

    jest

This runs all the tests & generates reports for the docs site.
