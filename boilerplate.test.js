const { initSequelize } = require('./boilerplate');

describe("Boilerplate Code", () => {
	test("Can successfully connect to a database.", async () => {
		await expect(initSequelize().then(s => s.close())).resolves.not.toThrowError();
        });
});
