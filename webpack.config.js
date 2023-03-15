const path = require('path')

module.exports = {
	target: 'web',
	mode: 'production',
	entry: {
		SearchTools: path.resolve(__dirname, 'webpack/SearchTools.jsx')
	},
	output: {
		path: path.resolve(__dirname, "webpack/dist"),
		filename: '[name].js'
	},
	module: {
		rules: [],
	},
	externalsPresets: {
		node: true // in order to ignore built-in modules like path, fs, etc
	},
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
}