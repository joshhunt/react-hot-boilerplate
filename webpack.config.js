var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.styl$/,
      loaders: [
        'style',
        'css?modules&importLoaders=2&localIdentName=[folder]-[local]',
        'autoprefixer?browsers=last 2 version',
        'stylus?outputStyle=expanded',
      ],
    }],
  },
};
