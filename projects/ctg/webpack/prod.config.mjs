'use strict';

/** @type {() => import('webpack').Configuration} */
export const webpackProd = (env, args) => {
  return {
    mode: 'production',
    output: {
      clean: true
    }
  };
};
