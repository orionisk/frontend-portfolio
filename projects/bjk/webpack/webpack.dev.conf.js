'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig(), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    client: {
      overlay: true
    },
    // compress: true,
    liveReload: true,
    hot: false,
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/404.html' }
      ]
    }
  }
});

module.exports = new Promise(resolve => {
  resolve(devWebpackConfig);
});
