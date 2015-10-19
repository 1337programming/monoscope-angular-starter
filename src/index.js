'use strict';
var angular = require('angular');
require('./loader');

angular.module('app', [
	require('angular-ui-router'),
	'loader'
]);