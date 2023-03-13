const asyncHandler = require('express-async-handler');
const {loginUserSchema, searchListingsSchema} = require('./validators');
const sequelize = require('sequelize');
const {Op} = sequelize;

/*
	Routes
	Contains routes.

	If you write a route that's an async function, you need
	to wrap it with asyncHandler().
*/

function redirectLogin(req, res) {
	return res.redirect(`/user/login?redirectURI=${encodeURIComponent(req.originalUrl)}`);
}

function requiresAuth(routeFunc) {
	return async (req, res) => {
		if (!req.user) {
			redirectLogin(req, res);
		} else {
			await routeFunc(req, res);
		}
	};
}

module.exports = (app, models) => {
	const { User, Address, ToolCategory, ToolMaker, Tool, Listing } = models;

	app.get('/', asyncHandler(async (req, res) => {
		res.render('index.html', {});
	}));

	/*
	 * User Creation/Editing
	 */

	app.get('/user/new', asyncHandler(async (req, res) => {
		if (req.user) {
			res.redirect('/');
		} else {
			res.render('new_user.html', {});
		}
	}));

	app.post('/user/new', asyncHandler(async (req, res) => {
		const { first_name, last_name, email, password,
			line_one, line_two, city, state, zip_code } = req.body;

		const address = await Address.create({ line_one, line_two, city, state, zip_code });

		const user = await User.create({ active: true, first_name, last_name, email, address_id: address.id });
		await user.setPassword(password);
		await user.save();
		await res.setUser(user);
		res.redirect('/user/me');
	}));

	app.post('/user/edit', asyncHandler(requiresAuth(async (req, res) => {
		const { first_name, last_name, email, password, active,
			line_one, line_two, city, state, zip_code } = req.body;

		const user = req.user; 
		user.first_name = first_name;
		user.last_name = last_name;
		user.email = email;
		user.active = active === 'on';

		if (password) {
			await user.setPassword(password);
		}

		await user.save();
		res.redirect(`/user/me`);
	})));



	/*
	 * User Login
	 */

	app.get('/user/login', asyncHandler(async (req, res) => {
		const {redirectURI} = req.query;
		if (req.user) {
			res.redirect(redirectURI ?? '/');
		} else {
			res.render('login.html', {error: null, redirectURI});
		}
	}));

	app.post('/user/login', asyncHandler(async (req, res) => {
		const {email, password, redirectURI} = await loginUserSchema.validate(req.body);
		let u = await models.User.findAll({where: {email: email}});
		u = u.length > 0 ? u[0] : null;
		
		if (u && u.passwordMatches(password)) {
			await res.setUser(u);
			res.redirect(redirectURI ?? '/');
		} else {
			res.render('login.html', {error: "Invalid username or password."});
		} 
	}));



	/*
	 * User/Account viewing
	 */

	app.get('/user', asyncHandler(async (req, res) => {
		const users = await models.User.findAll();
		res.render('users_list.html', { users });
	}));

	app.get('/user/me', asyncHandler(requiresAuth(async (req, res) => {
		res.render('user_singular.html', { user: req.user });
	})));

	app.get('/user/:user_id', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const user = await User.findByPk(user_id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.render('user_singular.html', { user });
	}));

	/*
	 * View A user's tools
	 */
	
	app.get('/user/:user_id/tools', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);

		if (!owner) {
			return res.status(404).json({ error: "User not found." });
		}

		const tools = await Tool.findAll({ where: { owner_id: owner.id } });
		
		res.render('tool_list.html', {tools, user: owner});
	}));
	  
	/*
		Add Tools to User
	*/
	app.get('/tool/new', asyncHandler(requiresAuth(async (req, res) => {
		const toolCategories = ToolCategory.findAll();
		const toolMakers = ToolMaker.findAll();

		res.render('_add_tool.html', {toolCategories, toolMakers});
	})));

	app.post('/tool/new', asyncHandler(requiresAuth(async (req, res) => {
		const { name, description, tool_category_id, tool_maker_id } = req.body;

		const tool = await models.Tool.create({
			name, description, owner_id: req.user.id,
			tool_maker_id, tool_category_id
		});

		res.redirect(`/user/me/tools`);
	})));

	// TODO: tool editing endpoints

	/*
	 * Settings Pages
	 */

	app.get('/account', asyncHandler(async (req, res) => {
		res.render('account.html', {error: null});
	}));

	/*
	 * API Pages
	 */

	app.get('/search', asyncHandler(async (req, res) => {
		res.render('_recommendFromSearch.html', {error: null});
	}));

	/*
	 * Listings
	 */
	app.get('/listings/search.json', asyncHandler(async (req, res) => {
		const {
			searchQuery, // string
			searchRadius, // kilometers
			userLat, userLon, // degrees
			useUserAddress // boolean
		} = await searchListingsSchema.validate(req.query);

		let lat = userLat;
		let lon = userLon;
		if (req.user && useUserAddress) {
			let a = req.user.getAddress();
			if (a) {
				if (a.ensureGeocoded()) {
					lat = a.geocoded_lat;
					lon = a.geocoded_lon;
				}
			}
		}

		lat = `radians(${lat})`;
		lon = `radians(${lon})`;
		let ownersLat = `radians("tool->owner->address"."geocoded_lat")`;
		let ownersLon = `radians("tool->owner->address"."geocoded_lon")`;

		const distanceKm = `(6371 * acos(cos(${lat}) * cos(${ownersLat}) * cos(${lon} - ${ownersLon}) + sin(${lat}) * sin(${ownersLat})))`;

		let results = await models.Listing.findAll({
			include: [{
				model: models.Tool,
				as: 'tool',
				where: !searchQuery ? {} : {
					searchVector: {
						[Op.match]: sequelize.fn('to_tsquery', searchQuery)
					}
				},
				include: [{
					model: models.User,
					as: 'owner',
					required: true,
					include: [{
						model: models.Address,
						as: 'address',
						required: true,
						attributes: {
							include: [[
								sequelize.literal(distanceKm),
								'distance'
							]]
						},
						order: sequelize.col('distance'),
						where: sequelize.literal(`${distanceKm} < ${searchRadius}`)
					}]
				}]
			}]
		});
		res.json({results});
	}));
};
