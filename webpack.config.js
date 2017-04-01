var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
	
	//入口   配置
	entry: [
		'webpack-dev-server/client?http://localhost',
		'webpack/hot/only-dev-server',
		__dirname+ '/src/scripts/app.js'
	],

	
	//出口 输出配置
	output: {
		path: __dirname+ '/prd/',
		filename: 'bundle.js'
	},
	
	// sourcemap
	devtool: 'source-map',
	
	//模块配置
	module:{
		loaders:[{
			test: /\.scss$/,
//			loader: 'style!css!sass'  		//style!css不能交换位置
			loader: ET.extract('style','css!sass')
		},{
			test: /\.css$/,
			loader: 'style!css'  		//style!css不能交换位置
		},{
			test:/\.js$/,
			exclude: /node_modues/,
			loader: 'babel'
		},{
			test:/\.jsx$/,
			exclude: /node_modues/,
			loader: 'babel'
		},{
			test:/\.html/,
			loader:'string'
		}]
	},
	
	
	//插件
	plugins: [
		//版本好控制需要的
		 new ET("bundle.css" , {
		 	allChunks: true
		 }),
		 new webpack.HotModuleReplacementPlugin()
	]
}
