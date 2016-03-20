var webpack_config = require('./webpack.config.js');

webpack_config.plugins = [];
webpack_config.entry = {};
module.exports = function(config) {
  'use strict';
  config.set({
    background: false,
    basePath: '.',
    frameworks: ['mocha', 'chai', 'sinon', 'chai-as-promised'],

    files: [
      __dirname + '/tests/index.js'
    ],

    preprocessors: {
      './tests/index.js': ['webpack', 'sourcemap']
    },

    client: {
      mocha: {
        timeout: 15000
      }
    },

    // web server port
    port: process.env['KARMA_PORT'] || 9000,

    // cli runner port
    runnerPort: process.env['KARMA_RUNNER_PORT'] || 9100,

    webpack: webpack_config,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    }
  });
};