var webpack = require('webpack');
var path = require('path');

export const resolve = {
    modulesDirectories: ['node_modules', 'src/components', '.', 'src'],
    extensions: ['', '.js', '.jsx', '.less']
};

export const nodeEnv = (env) => new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(env)
  }
});

export const output = (prod) => ({
  path: path.join(__dirname, 'dist'),
  publicPath: '/static/',
  filename: prod ? '[name]-[hash].js' : 'bundle.js',
  ...(prod && {hashDigestLength: 6})
});
