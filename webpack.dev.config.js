
var path = require('path');
var webpack = require('webpack');
var hostname = process.env.HOT_LOAD_HOSTNAME || 'localhost';
var port = process.env.HOT_LOAD_PORT || 8888;
import * as loaders from './webpack/loaders.js';

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  eslint: {
    emitWarning: true
  },
  module: {loaders: [loaders.jsxLoader, loaders.lessLoader, loaders.fontLoader, loaders.imageLoader]},
  resolve: {
    modulesDirectories: ['node_modules', 'src/components', '.', 'src'],
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': JSON.stringify('development')
     }
   })
  ],
  devtool: 'eval'
};
