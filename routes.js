const asyncHandler = require('express-async-handler');
const loginUserSchema = require('./validators/loginUser');

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
		const user = await models.User.findByPk(user_id, { include: 'Tool' });
		
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}

		const { name, description } = req.body;
		const tool = await models.Tool.create({ name, description });

		res.render('tool_list.html', {tools});
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


	/*
	 * Settings Pages
	 */

	app.get('/account', asyncHandler(async (req, res) => {
		res.render('account.html', {error: null});
	}));
};
