'use strict';
import { merge } from 'webpack-merge';
import webpackBaseConf from './webpack.base.conf.mjs';

/** @type {import('webpack').Configuration} */
const buildWebpackConfig = merge(webpackBaseConf({ portfolio: true }), {
  mode: 'production',
  output: {
    clean: true
    // publicPath: '/'
  }
});

export default new Promise(resolve => {
  resolve(buildWebpackConfig);
});
