var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/entry.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    hashDigestLength: 6
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel'},

      {test: /\.less$/, loader:
        ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader')},

      {test: /\.(?:eot|ttf|woff2?)$/, loader: 'file-loader?name=[path][name]-[hash:6].[ext]&context=assets'},

      {test: /\.(svg)$/, loader: 'raw-loader'}
    ],
    postLoaders: [
      {loader: 'transform?envify'}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/components', '.', 'src'],
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
