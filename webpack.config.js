var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loaders: [
        'style',
        'css?modules&importLoaders=2&localIdentName=[folder]-[local]',
        'autoprefixer?browsers=last 2 version',
        'stylus?outputStyle=expanded'
      ]
    }]
  }
};
