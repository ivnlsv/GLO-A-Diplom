const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist'),
		
	},
     module: {
		rules: [
			{
				test: /\.(sass|less|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			/* {
				test: /\.(png|svg|jpg)$/,
				use: [
					{
						loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',    
						publicPath: '../',
						outputPath: 'assets/images',
						},
					},
				],
			}, */
		],
	}, 
	
/* 	plugins: [
		new HtmlWebpackPlugin({
			template: '../index.html',
		}),
	], */
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true,
		},
	},
};
