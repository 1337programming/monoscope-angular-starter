var hostname = 'localhost';
var port = '8080';
var plugins = [];
var webpack = require('webpack');
var bowerResolvePlugin = new webpack.ResolverPlugin(
  new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
);

plugins.push(bowerResolvePlugin);
module.exports = {
  devtool: '#inline-source-map',
  entry: 'mocha!./tests/index.js',
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://' + hostname + ':' + port + '/tests'
  },
  module: {
    loaders: [
      {
        test: /(\.css|\.less)$/,
        loader: 'null-loader',
        exclude: [
          /build/
        ]
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'angular-ui-router': __dirname + '/bower_components/angular-ui-router/release/angular-ui-router.min.js'
    },
    root: './bower_components'
  },
  devServer: {
    host: hostname,
    port: port
  },
  plugins: plugins
};