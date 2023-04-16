const path = require('path');
const webpack = require('webpack');
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
		NavBar: path.resolve(__dirname, 'webpack/NavBar.jsx'),
		ListingDetails: path.resolve(__dirname, 'webpack/ListingDetails.jsx'),
		Login: path.resolve(__dirname, 'webpack/Login.jsx'),
		ReviewList: path.resolve(__dirname, 'webpack/ReviewList.jsx'),
		ListingsList: path.resolve(__dirname, 'webpack/ListingsList.jsx'),
		UserSingular: path.resolve(__dirname, "webpack/UserSingular.jsx"),
		UsersList: path.resolve(__dirname, 'webpack/UsersList.jsx'),
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
	// Splits all code in ./node_modules off into its own file.
	// This makes it so that multiple components on the page don't
	// each download the same code
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
}