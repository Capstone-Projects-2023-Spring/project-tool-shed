const path = require('path');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	target: 'web',
	mode: 'development',
	entry: {
		index_page: path.resolve(__dirname, 'webpack/index_page.jsx'),
		about: path.resolve(__dirname, 'webpack/about.jsx'),
		NewUserForm: path.resolve(__dirname, 'webpack/NewUserForm.jsx'),
		UserMessaging: path.resolve(__dirname, 'webpack/UserMessaging.jsx'),
		account: path.resolve(__dirname, 'webpack/account.jsx'),
		Inbox: path.resolve(__dirname, 'webpack/Inbox.jsx'),
		ToolList: path.resolve(__dirname, 'webpack/ToolList.jsx'),
		ToolForm: path.resolve(__dirname, 'webpack/ToolForm.jsx'),
		ListingDetails: path.resolve(__dirname, 'webpack/ListingDetails.jsx'),
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
//		new BundleAnalyzerPlugin()
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
}