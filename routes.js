const asyncHandler = require('express-async-handler');
const loginUserSchema = require('./validators/loginUser');

/*
	Routes
	Contains routes.

	If you write a route that's an async function, you need
	to wrap it with asyncHandler().
*/

module.exports = (app, models) => {
	const { User, Address } = models;
	app.get('/', asyncHandler(async (req, res) => {
		// render the template at templates/index.html
		// with the parameters:
		// user: the logged in user (if logged in)
		res.render('index.html', {user: req.user});
	}));

	//Testing User Access
	app.get('/getusers', asyncHandler(async (req, res) => {
		res.render('_getusers.html', {error: null});
	}));

	app.get('/users', asyncHandler(async (req, res) => {
		const users = await models.User.findAll();
		res.render('_getusers.html', { users });
	  }));

	// Ending User Access - JG

	//Adding a user

	app.get('/adduser', asyncHandler(async (req, res) => {
		res.render('_adduser.html', {error: null});
	}));

	app.post('/users', asyncHandler(async (req, res) => {
		const { first_name, last_name, email, password } = req.body;
		const user = await models.User.create({ first_name, last_name, email, password_hash: password });
		res.redirect('/users');
		res.json(user);
	  }));

	//end Adding a user

	// Edit a user

	app.post('/users/:user_id/edit', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const { first_name, last_name, email, active } = req.body;
	  
		const user = await models.User.findByPk(user_id);
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}
	  
		user.first_name = first_name;
		user.last_name = last_name;
		user.email = email;
		user.active = active === 'on';
		await user.save();
		res.redirect('/users');
		res.json(user);
	  }));

	//

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

	app.get('/account', asyncHandler(async (req, res) => {
		res.render('account.html', {error: null});
	}));
	
	/* Not tested if this works */
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
};
