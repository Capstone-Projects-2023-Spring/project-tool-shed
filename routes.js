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

function requiresAuth(routeFunc) {
	return async (req, res) => {
		if (!req.user) {
			res.status(401).json({error: "Unauthenticated"});
		} else {
			await routeFunc(req, res);
		}
	};
}

module.exports = (app, models) => {
	const { User, Address, ToolCategory, ToolMaker, Tool, Listing} = models;
	app.get('/', asyncHandler(async (req, res) => {
		// render the template at templates/index.html
		// with the parameters:
		// user: the logged in user (if logged in)
		res.render('index.html', {});
	}));

	/*
	 * User Creation
	 */

	app.get('/user/new', asyncHandler(async (req, res) => {
		if (req.user) {
			res.redirect('/');
		} else {
			res.render('new_user.html', {error: null});
		}
	}));

	app.post('/user/new', asyncHandler(async (req, res) => {
		const { first_name, last_name, email, password } = req.body;
		const user = await models.User.create({ first_name, last_name, email });
		await user.setPassword(password);
		await user.save();
		res.redirect('/user');
	}));



	/*
	 * User Editing
	 */

	app.post('/user/:user_id/edit', asyncHandler(requiresAuth(async (req, res) => {
		const { user_id } = req.params;
		const { first_name, last_name, email, password, active } = req.body;
	  
		const user = await models.User.findByPk(user_id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		if (user.id === req.user.id) {
			return res.status(403).json({ error: "This isn't your account." });
		} 
	  
		user.first_name = first_name;
		user.last_name = last_name;
		user.email = email;
		user.active = active === 'on';

		if (password) {
			await user.setPassword(password);
		}

		await user.save();
		res.redirect(`/user/${user_id}`);
	})));



	/*
	 * User Deletion
	 */
	// TODO: maybe rethink this into an account deactivation kinda thing later
	// untested
	app.delete('/user/:id', asyncHandler(async (req, res) => {
		const id = req.params.id;
		try {
			let u = await models.User.findOne({where: {id: id}});
			await u.destroy();
			return res.json({ message: 'User deleted'})
		}catch(err){
			res.render('account.html', { error: 'Something went wrong'});
		}
	}));



	/*
	 * User Login
	 */

	app.get('/user/login', asyncHandler(async (req, res) => {
		res.render('login.html', {error: null});
	}));

	app.post('/user/login', asyncHandler(async (req, res) => {
		const {email, password} = await loginUserSchema.validate(req.body);
		let u = await models.User.findAll({where: {email: email}});
		u = u.length > 0 ? u[0] : null;
		
		if (u && u.passwordMatches(password)) {
			await res.setUser(u);
			res.redirect('/');
		} else {
			res.render('login.html', {error: "Invalid username or password."});
		} 
	}));



	/*
	 * User viewing
	 */

	app.get('/user', asyncHandler(async (req, res) => {
		const users = await models.User.findAll();
		res.render('users_list.html', { users });
	}));

	app.get('/user/:user_id', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const user = await models.User.findByPk(user_id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.render('user_singular.html', { user });
	}));

	/*
	 * Tool viewing
	 */

	app.get('/user/:user_id/tools', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const user = await models.User.findByPk(user_id, {
										include: [{ model: Tool, as: 'tools' }]
		  });
		
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}

		const usertools = user.tools;

		res.render('tool_list.html', {usertools});
	}));
	  

/* app.get('/usertools', asyncHandler(async (req, res) => {
	 	const users = await models.User.findAll();
	 	res.render('tool_list.html', { users });
	}));

	app.get('/user/:user_id', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const user = await models.Tool.findByPk(tool_id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.render('tools_list', { user });
	}));
*/
	/*
		Add Tools to User
	*/
	app.get('/user/:user_id/newtool', asyncHandler(async (req, res) => {
		res.render('_addtool.html', {error: null});
	}));

	app.post('/user/:user_id/tools', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const usertools = await models.User.findAll({ include: {model: Tool, as: 'tools', foreignKey: 'owner_id'}});
		
		if (!usertools) {
		  return res.status(404).json({ error: "User's tools not found" });
		}

		const { tool_name, description, owner_id } = req.body;
		const tool = await models.Tool.create({ tool_name, description, owner_id });

		res.redirect('/user/:user_id/tools');
	}));

	/*
	 * Settings Pages
	 */

	app.get('/account', asyncHandler(async (req, res) => {
		res.render('account.html', {error: null});
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
