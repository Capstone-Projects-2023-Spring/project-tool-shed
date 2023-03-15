const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	target: 'web',
	mode: 'production',
	entry: {
		index_page: path.resolve(__dirname, 'webpack/index_page.jsx')
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
	plugins: [
		new webpack.DefinePlugin({
			GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY)
		}),
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
}