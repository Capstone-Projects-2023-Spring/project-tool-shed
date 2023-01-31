
module.exports = app => {
	app.get('/', (req, res) => {
		// render the template at templates/index.html
		// with the parameters:
		// world = "WORLD"
		res.render('index.html', {world: 'WORLD'});
	});
};
