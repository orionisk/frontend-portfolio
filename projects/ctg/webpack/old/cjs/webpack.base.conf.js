'use strict';
// const groupModulesByName = require('./groupModulesByName.js');
const path = require('path');
const glob = require('fast-glob');
const PugPlugin = require('pug-plugin');

const root = path.resolve(__dirname, '../../');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const pagesDir = path.join(src, 'views', 'pages');
const entries = Object.fromEntries(
  glob.sync(pagesDir + '/**/[!_]*.pug', { deep: 2 }).map(p => [path.parse(p).name, p])
);

// const langPath = {
//   en: 'en_US/'
// };

/** @type {() => import('webpack').Configuration} */
module.exports = (data = {}) => {
  return {
    target: 'web',
    experiments: {
      topLevelAwait: true
    },
    entry: {
      // index: path.join(pagesDir 'home', 'index.pug')
      // catalog: path.join(pagesDir, 'catalog', 'catalog.pug')
      ...entries
    },
    output: {
      filename: 'assets/js/[name].js',
      path: dist,
      publicPath: '/'
    },
    optimization: {
      // minimize: false,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/].+\.(js|ts)$/,
            enforce: true,
            // name: 'vendor',
            name(module) {
              const { name, version } = module.resourceResolveData.descriptionFileData;
              // const vName = groupModulesByName(name, version, 'swiper', /swiper|dom7|ssr-window/);
              const vName = `${name}_${version}`;
              return path.join('npm', vName.replaceAll('@', ''));
            }
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          loader: 'babel-loader',
          exclude: '/node_modules'
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
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
