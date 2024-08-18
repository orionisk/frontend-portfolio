'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

// console.log(new TerserPlugin());

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /app\.js/
      }),
      new TerserPlugin({
        include: /vendors\.js/
      })
      // new CssMinimizerPlugin({
      //   minimizerOptions: {
      //     preset: ['default']
      //   }
      // })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif)$/i,
      pngquant: { speed: 1, quality: '95-100' },
      plugins: [ImageminMozjpeg({ quality: 90 })]
    })
  ]
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
