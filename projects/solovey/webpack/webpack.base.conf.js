'use strict';
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets'
};

const PAGES_DIR = `${PATHS.src}/pug`;
const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter(fileName => fileName.endsWith('.pug'));

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: `${PATHS.assets}/js/[name]-[contenthash].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
				loader: 'file-loader',
				options: { name: '[name].[ext]' }
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: { name: '[name].[ext]' }
			},
			{
				test: /\.(s[ac]|c)ss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true, url: false }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'resolve-url-loader',
						options: { removeCR: true }
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							additionalData: `$env: ${process.env.NODE_ENV === 'production'};`
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'~': 'src'
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}/css/[name]-[contenthash].css`
			// chunkFilename: '[id].css'
		}),
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: `${PATHS.src}/${PATHS.assets}/img`,
						to: `${PATHS.assets}/img`
					},
					{
						from: `${PATHS.src}/${PATHS.assets}/fonts`,
						to: `${PATHS.assets}/fonts`
					}
				]
			}),
		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page.replace(/\.pug/, '.html')}`,
			production: (process.env.NODE_ENV === 'production')
		})
		)
	]
};