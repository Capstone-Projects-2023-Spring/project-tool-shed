const request = require('supertest');
const { initSequelize, buildExpressApp, createDatabaseIfNotExists, dropDatabaseIfExists } = require('./boilerplate');

let db = null;
let app = null;

const FAKE_DB = 'postgres-fake';

beforeAll(async () => {
	await createDatabaseIfNotExists(FAKE_DB);
	db = await initSequelize(FAKE_DB);
	app = buildExpressApp(db);
});

afterAll(async () => {
	await db.close();
	await dropDatabaseIfExists(FAKE_DB);
	/*
	for (const Model of Object.values(db.models)) {
		Model.destroy({where: {}, truncate: true});
	}
	await db.close();*/
});

describe("Test loading", () => {
	test("Can successfully load the index page.", async () => {
        	const r = await request(app).get('/');
		expect(r.statusCode).toBe(200);
	});

	test("Can post a new user form and then log in.", async () => {
		const params = {
			first_name: "dddd",
			last_name: "asdfasdf",
			email: "foo@bar.com",
			state: "NJ",
			city: "Cherry Hill",
			line_one: "1234 Example Road",
			password: "asdf",
			zip_code: "08108"
			
		};
		const res = await request(app).post('/user/new.json').send(params).set('Content-Type', 'application/json');
		expect(res.statusCode).toBe(200);
		const { user } = res.body;
		expect(user.active).toBe(true);

		const redirectURI = '/foofoo'
		const login = await request(app).post('/user/login').send({
			email: params.email,
			password: params.password,
			redirectURI
		}).set('Content-Type', 'application/x-www-form-urlencoded');
		expect(login.statusCode).toBe(302);

		const {'set-cookie': setCookie, location: loc} = login.headers;
		expect(loc).toBe(redirectURI);
		expect(setCookie.length).toBe(1);
		expect(setCookie[0].includes('logintoken')).toBe(true);
	});	
});
