/*
	Copy paste this into the repl launched by `npm run shell`. Make sure
	the geocoder is available.
*/

let a1 = await models.Address.create({line_one: '1 Powell Lane', city: 'Collingswood', state: "NJ", zip_code: "08108"});
let a2 = await models.Address.create({line_one: '108 E Main St', city: 'Maple Shade', state: "NJ", zip_code: "08052"});
let a3 = await models.Address.create({line_one: '1801 N Broad St', city: 'Philadelphia', state: "PA", zip_code: "19122"});
let a4 = await models.Address.create({line_one: '1400 John F Kennedy Blvd', city: 'Philadelphia', state: "PA", zip_code: "19107"});
let a5 = await models.Address.create({line_one: '640 Creek Rd', city: 'Bellmawr', state: "NJ", zip_code: "08031"});
let a6 = await models.Address.create({line_one: '20 W 34th St.', city: 'New York', state: "NY", zip_code: "10001"});


let u1 = await models.User.create({first_name: 'a', last_name: 'g', email: 'foo5@bar.com', address_id: a1.id});
let u2 = await models.User.create({first_name: 'b', last_name: 'h', email: 'foo4@bar.com', address_id: a2.id});
let u3 = await models.User.create({first_name: 'c', last_name: 'i', email: 'foo3@bar.com', address_id: a3.id});
let u4 = await models.User.create({first_name: 'd', last_name: 'j', email: 'foo2@bar.com', address_id: a4.id});
let u5 = await models.User.create({first_name: 'e', last_name: 'k', email: 'foo1@bar.com', address_id: a5.id});
let u6 = await models.User.create({first_name: 'f', last_name: 'l', email: 'foo@bar.com', address_id: a6.id});


let t1 = await models.Tool.create({description: '1', owner_id: u1.id});
let t2 = await models.Tool.create({description: '2', owner_id: u2.id});
let t3 = await models.Tool.create({description: '3', owner_id: u3.id});
let t4 = await models.Tool.create({description: '4', owner_id: u4.id});
let t5 = await models.Tool.create({description: '5', owner_id: u5.id});
let t6 = await models.Tool.create({description: '6', owner_id: u6.id});


let l1 = await models.Listing.create({ price: 420.69, tool_id: t1.id });
let l2 = await models.Listing.create({ price: 420.69, tool_id: t2.id });
let l3 = await models.Listing.create({ price: 420.69, tool_id: t3.id });
let l4 = await models.Listing.create({ price: 420.69, tool_id: t4.id });
let l5 = await models.Listing.create({ price: 420.69, tool_id: t5.id });
let l6 = await models.Listing.create({ price: 420.69, tool_id: t6.id });
