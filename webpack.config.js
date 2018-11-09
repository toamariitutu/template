const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isDevelop = NODE_ENV === 'development';
let appId
switch (NODE_ENV) {
  case 'development':
    appId = JSON.stringify('XXXXXXXXXX')
    break
  case 'dev-build':
    appId = JSON.stringify('XXXXXXXXXX')
    break
  case 'production':
  default:
    appId = JSON.stringify('XXXXXXXXXX')
    break
}

module.exports = [
  {
    context: path.resolve(__dirname, './src'),
    mode : NODE_ENV || 'production',
    devServer: {
      port: 3000,
      contentBase: path.resolve(__dirname, './dist'),
      historyApiFallback: true,
      watchContentBase: true
    },
    entry: [
        path.join(__dirname, '/src/js', 'index.tsx'),
        path.join(__dirname, '/src/sass', 'style.scss'),
      ]
    ,
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename : isDevelop ? 'js/[name].js' : 'js/[name].[hash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: "style-loader",
              use: ["css-loader", "postcss-loader", "sass-loader?outputStyle"]
            }
          )
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        },
      ]
    },
    plugins: [
      new WriteFilePlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin(isDevelop ? 'css/style.css' : 'css/style.[hash].css'),
      new HtmlWebpackPlugin({
          template: 'index.html',
          minimize: false
      }),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'SETTING_APP_ID': appId,
      }),
    ],
    externals: [{
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }],
  },
]
