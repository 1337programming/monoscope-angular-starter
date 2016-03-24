var webpack_config = require('./webpack.config.js');

webpack_config.plugins = [];
webpack_config.entry = {};
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'sinon', 'chai-as-promised', 'chai'],

    files: [
      __dirname + '/node_modules/phantomjs-polyfill/bind-polyfill.js',
      __dirname + '/tests/index.js'
    ],

    preprocessors: {
      './tests/index.js': ['webpack', 'sourcemap']
    },

    coverageReporter: {
      type: 'html',
      dir: 'build/coverage'
    },

    reporters: ['spec', 'coverage'],

    webpack: {
      // webpack configuration
      module: {
        loaders: [
          {test: /\.css$/, loader: 'style!css'},
          {test: /\.scss$/, loader: 'style!css!sass'},
          {test: /\.html$/, loader: 'html'},
          {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: 'file'}
        ]

      },
      resolve: {
        modulesDirectories: [
          '',
          'src',
          'bower_components',
          'node_modules'
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    browsers: ['PhantomJS']
  });
};