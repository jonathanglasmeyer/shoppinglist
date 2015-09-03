
var path = require('path');
var webpack = require('webpack');
var hostname = process.env.HOT_LOAD_HOSTNAME || 'localhost';
var port = process.env.HOT_LOAD_PORT || 8888;

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
  module: {
    loaders: [
      {test: /\.jsx?$/, include: [
          path.join(__dirname, 'src'), 
          path.join(__dirname, 'config')
        ],
       loaders: ['babel']},

      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader'},

      {test: /\.(?:eot|ttf|woff2?)$/, loader: 'file-loader?name=[path][name]-[hash:6].[ext]&context=assets'},

      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }

    ]
  },
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
