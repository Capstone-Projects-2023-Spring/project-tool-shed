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
