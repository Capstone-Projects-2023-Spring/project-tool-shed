const { initSequelize } = require('./boilerplate');

describe("Boilerplate Code", () => {
	test("Can successfully connect to a database.", async () => {
		await initSequelize().then(s => s.close());
        });
});
