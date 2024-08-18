'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
// const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('webpack').Configuration} */
const buildWebpackConfig = merge(baseWebpackConfig(), {
  mode: 'production',
  output: {
    clean: true
  },
  optimization: {
    minimize: true
    // minimizer: [
    //   new TerserPlugin({
    //     include: /app\.js/
    //   }),
    //   new TerserPlugin({
    //     include: /vendors\.js/
    //   })
    // ]
  }
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
