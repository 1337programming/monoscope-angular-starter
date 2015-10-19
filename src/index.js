'use strict';
var angular = require('angular');
require('./hot-module-replacement');

angular.module('app', [
	require('angular-ui-router'),
	'loader'
]).config(function($provide, $controllerProvider) {
	window.$provide = $provide;
	window.$controllerProvider = $controllerProvider;
}).run(function($injector, $cacheFactory, $controller) {
	window.$injector = $injector
	window.$cacheFactory = $cacheFactory;
	window.$controller = $controller;
})