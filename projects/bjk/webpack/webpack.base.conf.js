'use strict';
// const fs = require('fs');
const path = require('path');
const PugPlugin = require('pug-plugin');

const root = path.resolve(__dirname, '../');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const pages = path.join(`${src}/views/pages`);

// const langPath = {
//   en: 'en_US/'
// };

/** @type {() => import('webpack').Configuration} */
module.exports = (data = {}) => {
  return {
    target: 'web',
    entry: {
      // 'en_US/index': 'src/views/pages/home/index.pug?lang=en',
      index: path.join(`${pages}/home/index.pug`)
    },
    output: {
      filename: 'assets/js/[name].js',
      path: dist,
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/].+\.(js|ts)$/,
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules'
        },
        {
          test: /\.pug$/,
          loader: PugPlugin.loader,
          options: {
            self: true,
            data
          }
        },
        {
          test: /\.(s[ac]|c)ss$/,
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
          type: 'asset/resource',
          include: /assets\/fonts|node_modules/,
          generator: {
            filename: 'assets/fonts/[name]-[contenthash:4][ext]'
          }
        },
        {
          oneOf: [
            {
              test: /\.(svg)$/i,
              loader: '@nuintun/svgo-loader',
              include: path.join(src, 'assets', 'img'),
              resourceQuery: /inline/,
              type: 'asset/inline'
            },
            {
              test: /\.(svg)$/i,
              type: 'asset/resource',
              resourceQuery: /nosvgo/,
              include: path.join(src, 'assets', 'img'),
              generator: {
                filename: 'assets/img/[name]-[contenthash:4][ext]'
              }
            },
            {
              test: /\.(svg)$/i,
              type: 'asset/resource',
              loader: '@nuintun/svgo-loader',
              include: path.join(src, 'assets', 'img'),
              generator: {
                filename: 'assets/img/[name]-[contenthash:4][ext]'
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|webp|avif)$/i,
          type: 'asset/resource',
          include: path.join(src, 'assets', 'img'),
          use: [
            {
              loader: 'responsive-loader',
              options: {
                name: 'assets/img/[name]-[width]w.[ext]',
                quality: 95
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        src,
        js: path.join(src, 'assets', 'js'),
        styles: path.join(src, 'assets', 'styles'),
        views: path.join(src, 'views'),
        img: path.join(src, 'assets', 'img'),
        fonts: path.join(src, 'assets', 'fonts'),
        locales: path.join(src, 'locales'),
        cva: path.join(src, 'views', 'components', 'cva')
      },
      extensions: ['.js', '.ts']
    },
    plugins: [
      new PugPlugin({
        css: {
          filename: 'assets/css/[name].[contenthash:4].css'
        }
      })
    ]
  };
};
