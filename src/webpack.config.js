const path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: './cameronseid.js',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				// Match woff2 in addition to patterns like .woff?v=1.1.1.
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: "url-loader",
					options: {
						// Limit at 50k. Above that it emits separate files
						limit: 50000,

						// url-loader sets mimetype if it's passed.
						// Without this it derives it from the file extension
						mimetype: "application/font-woff",

						// Output below fonts directory
						name: "./fonts/[name].[ext]",
					}
				}],
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}]
			}
    	]
	},
	externals: {
		jquery: 'jQuery'
	},
	stats: {
		colors: true
	},
	plugins: [
    	new webpack.ProvidePlugin({
			"Hammer": "hammerjs/hammer"
		})
  ],
	resolve: {
		extensions: ['.js'],
		alias: {}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "../")
	},
	devServer: {
		contentBase: '../'
	},
};
