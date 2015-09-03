var webpack = require('webpack');
var path = require('path');

const rootDir = path.join(__dirname, '..');

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
  path: path.join(rootDir, 'dist'),
  publicPath: '/static/',
  filename: prod ? '[name]-[hash].js' : 'bundle.js',
  ...(prod && {hashDigestLength: 6})
});
