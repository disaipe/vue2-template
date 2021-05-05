const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: argv.mode,
    entry: {
      app: {
        import: './src/main.js',
        dependOn: 'shared'
      },
      shared: 'vue'
    },
    output: {
      path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // https://babeljs.io/docs/en/options
              presets: ['@babel/preset-env'],
              plugins: []
            }
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            // https://vue-loader.vuejs.org/options.html
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[local]_[hash:base64:5]',
                      localIdentContext: path.resolve(__dirname, 'src'),
                    }
                  }
                },
                'postcss-loader'
              ]
            },
            {
              use: [
                isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                'css-loader',
                'postcss-loader'
              ]
            }
          ],

        }
      ],
    },
    plugins: [
      new ESLintPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
};
