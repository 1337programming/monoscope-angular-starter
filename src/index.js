'use strict';
var angular = require('angular');
require('./index.scss');

angular.module('app', [
	require('angular-ui-router'),
	'loader'
]);

require('./loader');