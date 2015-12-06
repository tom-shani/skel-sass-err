var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    main: './zerofour/assets/sass/main.scss',
  },

  output: {
    filename: 'js/[name].min.js',
    path: './zerofour/build/',
    publicPath: '../'
  },

  module: {
    loaders: [
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: 'file-loader?name=fonts/[name].[ext]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'},
      {test: /\.png$/,  loader: 'file-loader?name=css/images/[name].[ext]'},
      {test: /\.jpg$/,  loader: 'file-loader?name=css/images/[name].[ext]'}
    ]
  },

  plugins: [
    new Clean(['zerofour/build']),
    new ExtractTextPlugin('css/main.css')
  ]


}