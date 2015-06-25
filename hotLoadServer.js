import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.dev.config';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: __dirname,
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true
});

export default function(port) {
  server.listen(port, function(err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Hot load server listening on port' + this.address().port);
  });
}
