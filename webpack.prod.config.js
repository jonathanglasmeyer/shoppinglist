var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
import * as loaders from './webpack/loaders.js';
import {resolve, nodeEnv, output} from './webpack/common.js';


module.exports = {
  entry: {
    app: './src/entry.jsx'
  },
  output: output(true),
  module: {loaders: Object.values(loaders).map(loader => loader(true))},
  resolve,
  plugins: [
    nodeEnv('production'),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {drop_console: true}
    }),
    new HtmlWebpackPlugin({
      title: 'Shopping List',
      minify: true,
      inject: 'body', // Inject all scripts into the body
      template: 'public/index_production.html', // Load a custom template
    })
  ],
  devtool: 'hidden-source-map'
};
