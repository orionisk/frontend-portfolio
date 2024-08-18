'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');


const buildWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	output: {
		publicPath: '/'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: ({ speed: 1, quality: '95-100' }),
			plugins: [
				ImageminMozjpeg({ quality: 75 })
			]
		}),
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});