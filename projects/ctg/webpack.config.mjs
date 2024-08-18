'use strict';

import { merge } from 'webpack-merge';
import { webpackCommon } from './webpack/common.config.mjs';
import { webpackDev } from './webpack/dev.config.mjs';
import { webpackProd } from './webpack/prod.config.mjs';

/** @type {() => import('webpack').Configuration} */
export default (...arr) => {
  const [, args] = arr;

  const m = merge.bind(null, webpackCommon(...arr));

  const configs = {
    development: () => m(webpackDev(...arr)),
    production: () => m(webpackProd(...arr))
  };

  const config = configs[args.nodeEnv]?.();

  if (!config) throw new Error('Invalid config');

  return config;
};
