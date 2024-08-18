'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');

const publicPath = '/blabla';

const root = path.resolve(__dirname, '../');
const src = path.join(root, 'src');
const pagesDir = path.join(src, 'pug');
const pages = Object.fromEntries(
  fs
    .readdirSync(pagesDir)
    .filter(fileName => /pug/.test(fileName))
    .map(p => {
      const key = p.replace(/\.[^/.]+$/, '');
      const value = path.join(pagesDir, p + `?publicPath=${publicPath}`);
      return [key, value];
    })
);

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath,
    clean: true
  }
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       include: /app\.js/
  //     }),
  //     new TerserPlugin({
  //       include: /vendors\.js/
  //     })
  //   ]
  // },
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
