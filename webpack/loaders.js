var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.join(__dirname, '..');

export const jsxLoader = (prod) => ({
  test: /\.jsx?$/,
  include: [
    path.join(rootDir, 'src'),
    path.join(rootDir, 'config')
  ],
  loaders: ['babel']
});

const _less = 'css!autoprefixer?{browsers:["last 2 version"]}!less'

export const lessLoader = (prod) => ({
  test: /\.less$/,
  loader: prod ? ExtractTextPlugin.extract('style-loader', _less) : _less
});

export const fontLoader = (prod) => ({
  test: /\.(?:eot|ttf|woff2?)$/,
  loader: 'file?name=[path][name]-[hash:6].[ext]&context=assets',
});

export const imageLoader = (prod) => ({
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
  ]
});
