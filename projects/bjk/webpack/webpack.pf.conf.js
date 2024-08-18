'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');
const root = path.resolve(__dirname, '../');
const dist = path.join(root, 'dist-pf');
// const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('webpack').Configuration} */
const buildWebpackConfig = merge(baseWebpackConfig({ noindex: true }), {
  mode: 'none',
  output: {
    clean: true,
    path: dist,
    publicPath: '/'
  }
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
