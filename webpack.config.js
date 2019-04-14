const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	mode: 'development',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js',
		publicPath:'/'
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/i,exclude:/node_modules/,use:[
					{
						loader:'babel-loader',
						options:{
							presets:['@babel/preset-react']
						}
					}
				]
			},
			{
				test:/\.css$/i,
				use:['style-loader','css-loader',{
					loader:'postcss-loader',
					options:{
						plugins:[
							require('autoprefixer')
						]
					}
				}]
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:{
					loader:'url-loader',
					options:{
						outputPath:"img/",
						limit: 10*1024
					}
				}
			},
			{
				test:/\.(eot|svg|ttf|woff|woff2)$/i,
				use:{
					loader:'url-loader',
					options:{
						outputPath:'fonts/',
						limit: 10*1024
					}
				}
			},
			{
				test:/\.less$/i,
				use:['style-loader','css-loader','less-loader',{
					loader:'postcss-loader',
					options:{
						plugins:[
							require('autoprefixer')
						]
					}
				}]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:  path.resolve(__dirname,'./src/index.html')
		})
	],
	devServer:{
		contentBase: path.resolve(__dirname,'./'),
		compress: false,
		port: 3000,
		historyApiFallback: true,
		proxy: {
            '/api': 'http://localhost:3001'
        }
	}
}