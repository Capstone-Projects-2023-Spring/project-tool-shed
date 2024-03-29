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
	}, 10000); // 2x the default time limit since the backend geocodes the addess.

	test("Can create a tool & list it.", async () => {

	});

	test("Can search listings", async () => {
		let models = db.models;
		let a1 = await models.Address.create({line_one: '1 Powell Lane', city: 'Collingswood', state: "NJ", zip_code: "08108"});
let a2 = await models.Address.create({line_one: '108 E Main St', city: 'Maple Shade', state: "NJ", zip_code: "08052"});
let a3 = await models.Address.create({line_one: '1801 N Broad St', city: 'Philadelphia', state: "PA", zip_code: "19122"});
let a4 = await models.Address.create({line_one: '1400 John F Kennedy Blvd', city: 'Philadelphia', state: "PA", zip_code: "19107"});
let a5 = await models.Address.create({line_one: '640 Creek Rd', city: 'Bellmawr', state: "NJ", zip_code: "08031"});
let a6 = await models.Address.create({line_one: '20 W 34th St.', city: 'New York', state: "NY", zip_code: "10001"});

for (const a of [a1, a2, a3, a4, a5, a6]) {
	await a.ensureGeocoded(true);
}

let u1 = await models.User.create({first_name: 'Hank', last_name: 'Hill', email: 'foo5@bar.com', address_id: a1.id});
let u2 = await models.User.create({first_name: 'John', last_name: 'Cadwallader', email: 'foo4@bar.com', address_id: a2.id});
let u3 = await models.User.create({first_name: 'Charlie', last_name: 'Kelly', email: 'foo3@bar.com', address_id: a3.id});
let u4 = await models.User.create({first_name: 'Napoleon', last_name: 'Bonaparte', email: 'foo2@bar.com', address_id: a4.id});
let u5 = await models.User.create({first_name: 'Gavrilo', last_name: 'Princip', email: 'foo1@bar.com', address_id: a5.id});
let u6 = await models.User.create({first_name: 'Jerell', last_name: 'Thomas', email: 'foo@bar.com', address_id: a6.id});

let tc1 = await models.ToolCategory.create({name: 'Propane'});
let tc2 = await models.ToolCategory.create({name: 'Drills'});
let tc3 = await models.ToolCategory.create({name: 'Trimmers'});
let tc4 = await models.ToolCategory.create({name: 'Shovels'});
let tc5 = await models.ToolCategory.create({name: 'Hammers & Nailers'});
let tc6 = await models.ToolCategory.create({name: 'Saws'});

let strickland = await models.ToolMaker.create({name: 'Strickland Propane'});
let dewalt = await models.ToolMaker.create({name: 'DeWalt'});
let mwe = await models.ToolMaker.create({name: 'Milwauwkee'});
let rigid = await models.ToolMaker.create({name: 'Rigid'});
let craftsman = await models.ToolMaker.create({name: 'Craftsman'});
let royobi = await models.ToolMaker.create({name: 'Royobi'});

let t1 = await models.Tool.create({name: "100lb Propane Tank", description: 'You can store a lot of propane in this little beauty. I can feel it right now, barbecues all summer!', owner_id: u1.id, tool_category_id: tc1.id, tool_maker_id: strickland.id});
let t2 = await models.Tool.create({name: "Cordless Drill Saw", description: 'I don\'t know what to do with 21st century technology!', owner_id: u2.id, tool_category_id: tc2.id, tool_maker_id: dewalt.id});
let t3 = await models.Tool.create({name: "String Trimmer", description: `I don't know what this is supposed to do, but it's really effective at removing fingers.`, owner_id: u3.id, tool_category_id: tc3.id, tool_maker_id: mwe.id});
let t4 = await models.Tool.create({name: "Shovel", description: 'Lightly used in the early 1800s for digging trenches. Otherwise, like new.', owner_id: u4.id, tool_category_id: tc4.id, tool_maker_id: rigid.id});
let t5 = await models.Tool.create({name: "Nail Gun", description: 'Shoots nails (and Habsburg leaders!)', owner_id: u5.id, tool_category_id: tc5.id, tool_maker_id: craftsman.id});
let t6 = await models.Tool.create({name: "Chop Saw", description: 'Great for building stuff for the back yard!', owner_id: u6.id, tool_category_id: tc6.id, tool_maker_id: royobi.id});

let l1 = await models.Listing.create({ price: 420.69, tool_id: t1.id });
let l2 = await models.Listing.create({ price: 420.69, tool_id: t2.id });
let l3 = await models.Listing.create({ price: 420.69, tool_id: t3.id });
let l4 = await models.Listing.create({ price: 420.69, tool_id: t4.id });
let l5 = await models.Listing.create({ price: 420.69, tool_id: t5.id });
let l6 = await models.Listing.create({ price: 420.69, tool_id: t6.id });

		async function runSearch(searchRadius) {
			let search = await request(app).get('/api/listings/search.json').query({
				userLat: 39.980820,
				userLon: -75.156883,
				searchRadius
			}).set('Content-Type', 'application/json');
			expect(search.statusCode).toBe(200);
			return search.body.results;
		}

		let s1 = await runSearch(10000000);
		expect(s1.length).toBe(6);

		let s2 = await runSearch(100);
		expect(s2.length).toBe(5);

		let s3 = await runSearch(10);
		expect(s3.length).toBe(2);
	}, 50000000)
});
