'use strict';
import path from 'path';
import groupModulesByName from './common/groupModulesByName.mjs';
import PugPlugin from 'pug-plugin';
import { PATHS } from './common/paths.mjs';
// import { ESBuildMinifyPlugin } from 'esbuild-loader';

// const langPath = {
//   en: 'en_US/'
// };

/** @type {() => import('webpack').Configuration} */
export const webpackCommon = (env, args) => {
  const { nodeEnv } = args;
  const { portfolio = false } = env;

  const data = {
    production: nodeEnv === 'production',
    development: nodeEnv === 'development',
    env: nodeEnv,
    portfolio
  };

  const contenthash = portfolio ? '.[contenthash:4]' : '';

  return {
    target: 'web',
    experiments: {
      topLevelAwait: true
    },
    entry: {
      // index: path.join(pagesDir, 'home', 'index.pug'),
      // catalog: path.join(pagesDir, 'catalog', 'catalog.pug')
      ...PATHS.entries
    },
    output: {
      filename: 'assets/js/[name].js',
      path: env.portfolio ? PATHS.distPf : PATHS.dist,
      publicPath: '/'
    },
    optimization: {
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
              let vName = `${name}_${version}`;
              if (/swiper|dom7|ssr-window/.test(name))
                vName = groupModulesByName(name, version, 'swiper');
              return path.join('npm', vName.replaceAll('@', ''));
            }
          }
        }
      }
    },
    module: {
      rules: [
        // {
        //   test: /\.m?js$/,
        //   loader: 'babel-loader',
        //   exclude: '/node_modules'
        // },
        {
          test: /\.m?js$/,
          loader: 'esbuild-loader',
          options: {
            target: 'esnext'
          }
        },
        {
          test: /\.ts$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'esnext'
          }
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
            filename: `assets/fonts/[name]${contenthash}[ext]`
          }
        },
        {
          oneOf: [
            {
              test: /\.(svg)$/i,
              loader: '@nuintun/svgo-loader',
              include: path.join(PATHS.src, 'assets', 'img'),
              resourceQuery: /inline/,
              type: 'asset/inline'
            },
            {
              test: /\.(svg)$/i,
              type: 'asset/resource',
              resourceQuery: /nosvgo/,
              include: path.join(PATHS.src, 'assets', 'img'),
              generator: {
                filename: `assets/img/[name]${contenthash}[ext]`
              }
            },
            {
              test: /\.(svg)$/i,
              type: 'asset/resource',
              loader: '@nuintun/svgo-loader',
              include: path.join(PATHS.src, 'assets', 'img'),
              generator: {
                filename: `assets/img/[name]${contenthash}[ext]`
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|webp|avif)$/i,
          type: 'asset/resource',
          include: path.join(PATHS.src, 'assets', 'img'),
          use: [
            {
              loader: 'responsive-loader',
              options: {
                name: 'assets/img/[name]-[width]w.[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        src: PATHS.src,
        js: path.join(PATHS.src, 'assets', 'js'),
        styles: path.join(PATHS.src, 'assets', 'styles'),
        views: path.join(PATHS.src, 'views'),
        img: path.join(PATHS.src, 'assets', 'img'),
        fonts: path.join(PATHS.src, 'assets', 'fonts'),
        locales: path.join(PATHS.src, 'locales'),
        cva: path.join(PATHS.src, 'views', 'components', 'cva')
      },
      extensions: ['.js', '.ts']
    },
    plugins: [
      new PugPlugin({
        pretty: !portfolio,
        css: {
          filename: `assets/css/[name]${contenthash}.css`
        }
      })
    ]
  };
};
