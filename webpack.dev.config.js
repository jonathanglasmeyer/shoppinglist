
var path = require('path');
var webpack = require('webpack');
var hostname = process.env.HOT_LOAD_HOSTNAME || 'localhost';
var port = process.env.HOT_LOAD_PORT || 8888;

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://' + hostname + ':' + port,
      'webpack/hot/dev-server',
      './src/entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://' + hostname + ':' + port + '/public/'
  },
  eslint: {
    emitWarning: true
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders:
        ['react-hot', 'babel-loader?stage=0&optional=runtime']},

      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader'},

      {test: /\.(?:eot|ttf|woff2?)$/, loader: 'file-loader?name=[path][name]-[hash:6].[ext]&context=assets'},

      {test: /\.(svg)$/, loader: 'raw-loader'}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/components', '.', 'src'],
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': JSON.stringify('development')
     }
   })
  ],
  devtool: 'eval'
};
