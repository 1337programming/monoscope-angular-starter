'use strict';
require('./index.scss');
require('angular');
require('angular-resource');
require('angular-animate');

angular.module('app', [
	require('angular-ui-router'),
    'ngResource',
    'ngAnimate',
	'loader'
]);

require('./loader');