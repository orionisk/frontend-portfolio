'use strict';
import path from 'path';
import { PATHS } from './common/paths.mjs';

const rewrites = PATHS.pagesPaths
  .map(p => path.parse(p).name)
  .map(p => ({
    from: new RegExp(`^/${p}`),
    to: `/${p}.html`
  }));

export const webpackDev = (env, args) => {
  return {
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
        rewrites: [...rewrites, { from: /./, to: '/404.html' }]
      }
    }
  };
};
