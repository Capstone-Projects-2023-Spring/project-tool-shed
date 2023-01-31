
module.exports = (app, models) => {
	const { ToolType } = models;
	app.get('/', (req, res) => {
		// render the template at templates/index.html
		// with the parameters:
		// world = "WORLD"
		res.render('index.html', {world: 'WORLD'});
	});

	app.get('/createtype', async (req, res) => {
		const name = "Drill";
		let xs = await ToolType.findAll({where: {name}});
		if (xs.length === 0) {
			const tt = await ToolType.create({name});
			xs = [tt];
		}
		
		const ty = xs[0];
		res.send(`ToolType: ${ty.name} id: ${ty.id}`);
	});
};
