'use strict';
const path = require('path');
const fs = require('fs');
const PugPlugin = require('pug-plugin');

const root = path.resolve(__dirname, '../');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const pagesDir = path.join(src, 'pug', 'pages');
const pages = Object.fromEntries(
  fs
    .readdirSync(pagesDir)
    .filter(fileName => /pug/.test(fileName))
    .map(p => {
      const key = p.replace(/\.[^/.]+$/, '');
      const value = path.join(pagesDir, p);
      return [key, value];
    })
);

/** @type {import('webpack').Configuration} */
module.exports = {
  target: 'web',
  entry: {
    ...pages
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
        loader: PugPlugin.loader
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        include: path.join(src, 'assets', 'fonts'),
        generator: {
          filename: 'assets/fonts/[name]-[contenthash:4][ext]'
        }
      },
      {
        oneOf: [
          {
            test: /\.(svg)$/i,
            include: path.join(src, 'assets', 'img'),
            resourceQuery: /inline/,
            type: 'asset/inline'
          },
          {
            test: /\.(svg)$/i,
            type: 'asset/resource',
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
      img: path.join(src, 'assets', 'img'),
      fonts: path.join(src, 'assets', 'fonts'),
      pug: path.join(src, 'pug')
    }
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'assets/css/[name].[contenthash:4].css'
      }
    })
  ]
};
