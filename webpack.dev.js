var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'development',
	entry: ['./css/main.scss'],
	watch: true,
	output: {
	path: path.resolve(__dirname, './css'),
	},
	module: {
	rules: [
	  {
	    test: /\.scss$/,
	    use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
	  }
	],
	},
	plugins: [
		new MiniCssExtractPlugin({
	  filename: 'main.css',
	}),
	]
};
