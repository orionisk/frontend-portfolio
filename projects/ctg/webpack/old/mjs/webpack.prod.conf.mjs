'use strict';
import { merge } from 'webpack-merge';
import webpackBaseConf from './webpack.base.conf.mjs';

/** @type {import('webpack').Configuration} */
const buildWebpackConfig = merge(webpackBaseConf(), {
  mode: 'production',
  output: {
    clean: true
  }
});

export default new Promise(resolve => {
  resolve(buildWebpackConfig);
});
