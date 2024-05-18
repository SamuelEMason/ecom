// webpack.config.js
const webpack = require('webpack');

module.exports = {
	// other config options...
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	],
};
