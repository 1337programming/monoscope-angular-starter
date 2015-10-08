'use strict';
var angular = require('angular');

angular.module('app', [
	require('angular-ui-router')
]).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeController',
		controllerAs: 'home',
		template: '<h1>{{home.message}}</h1>'
	});
	$urlRouterProvider.otherwise('/');
}).controller('HomeController', function() {
	this.message = 'Hello World!';
});