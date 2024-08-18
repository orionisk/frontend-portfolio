'use strict';
import path from 'path';
import url from 'url';
import glob from 'fast-glob';
import { merge } from 'webpack-merge';
import baseWebpackConfig from './webpack.base.conf.mjs';

const __dirname = path.dirname(url.fileURLToPath(new URL(import.meta.url)));
const root = path.resolve(__dirname, '../');

const pagesPath = glob.sync(
  path.join(root, 'src', 'views', 'pages', '**', '[!_]*.pug').replace(/\\/g, '/'),
  {
    deep: 2
  }
);

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
      rewrites: [...rewrites, { from: /./, to: '/404.html' }]
    }
  }
});

export default new Promise(resolve => {
  resolve(devWebpackConfig);
});
