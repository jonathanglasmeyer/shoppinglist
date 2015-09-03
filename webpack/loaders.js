var path = require('path');

const rootDir = path.join(__dirname, '..');
export const jsxLoader = {
  test: /\.jsx?$/, 
  include: [
    path.join(rootDir, 'src'), 
    path.join(rootDir, 'config')
  ],
  loaders: ['babel']
};

export const lessLoader = {
  test: /\.less$/, 
  loader: 'style!css!autoprefixer?{browsers:["last 2 version"]}!less'
};

export const fontLoader = {
  test: /\.(?:eot|ttf|woff2?)$/, 
  loader: 'file?name=[path][name]-[hash:6].[ext]&context=assets',
}

export const imageLoader = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
  ]
}
