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

	// for debugging purposes
	app.get('/account/:id', asyncHandler(async(req, res) => {
		try{
			let u = await User.findByPk(req.params.id);
			return res.status(200).json(u);	
		} catch (err){
			return res.status(500).json({ message: 'Error'});
		}
	}));

	//delete an account
	app.delete('/account/:id', asyncHandler(async (req, res) => {
		const id = req.params.id;
		try {
			let u = await models.User.findOne({where: {id: id}});
			await u.destroy();
			return res.json({ message: 'User deleted'})
		}catch(err){
			res.render('account.html', { error: 'Something went wrong'});
		}
	}));
    
	//edit an account
	app.put('/account/:id', asyncHandler(async (req, res) => {
		const id = req.params.id;
		try {
			const USER_MODEL = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password_hash: req.body.password_hash,
			};
			try{
				const u = await models.User.update(USER_MODEL, { where: {id: id }});
				return res.status(200).json(u);
			} catch (err){}
			} catch (err){
				return res.status(500).json(err);
			}
	}));
};
