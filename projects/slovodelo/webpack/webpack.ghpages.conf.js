'use strict';
const path = require('path');
const { mergeWithRules } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const prodWebpackConfig = require('./webpack.prod.conf');

const publicPath = '/portfolio/slovodelo';
const dist = path.join(__dirname, '../dist-gh');

const ghWebpackConfig = {
  mode: 'production',
  output: { path: dist, publicPath },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          {
            loader: 'pug-plain-loader',
            options: {
              data: { publicPath },
              self: true
            }
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              additionalData: `$publicPath: ${publicPath};`
            }
          }
        ]
      }
    ]
  }
};

const buildWebpackConfig = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'replace'
      }
    }
  }
})(baseWebpackConfig, prodWebpackConfig, ghWebpackConfig);

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
