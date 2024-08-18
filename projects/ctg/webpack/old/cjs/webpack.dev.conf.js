'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const path = require('path');
const glob = require('fast-glob');
const root = path.resolve(__dirname, '../../');

const pagesPath = glob.sync(path.join(root, 'src', 'views', 'pages') + '/**/[!_]*.pug', {
  deep: 2
});
const rewrites = pagesPath
  .map(p => path.parse(p).name)
  .map(p => ({
    from: new RegExp(`^/${p}`),
    to: `/${p}.html`
  }));

const devWebpackConfig = merge(baseWebpackConfig(), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    client: {
      overlay: true
    },
    // liveReload: true,
    hot: false,
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true
      }
    },
    historyApiFallback: {
      rewrites: [...rewrites]
    }
  }
});

module.exports = new Promise(resolve => {
  resolve(devWebpackConfig);
});
