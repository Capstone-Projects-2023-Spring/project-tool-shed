const asyncHandler = require('express-async-handler');

/*
	Routes
	Contains routes.

	If you write a route that's an async function, you need
	to wrap it with asyncHandler().
*/

module.exports = (app, models) => {
	const { ToolType } = models;
	app.get('/', (req, res) => {
		// render the template at templates/index.html
		// with the parameters:
		// world = "WORLD"
		res.render('index.html', {world: 'WORLD'});
	});

	app.get('/createtype', asyncHandler(async (req, res) => {
		const name = "Drill";
		let xs = await ToolType.findAll({where: {name}});
		let ty = xs.length > 0 ? xs[0] : await ToolType.create({name});
		res.send(`ToolType: ${ty.name} id: ${ty.id}`);
	}));
};
