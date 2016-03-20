'use strict';
require('./index.scss');
require('angular');
require('../bower_components/angular-ui-router/release/angular-ui-router');
require('angular-resource');
require('angular-animate');

angular.module('app', [
  'ui.router',
  'ngResource',
  'ngAnimate',
  'loader'
]);

require('./loader');
