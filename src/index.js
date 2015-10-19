'use strict';
var angular = require('angular');
require('./hot-module-replacement');

angular.module('app', [
	require('angular-ui-router'),
	'loader'
]);