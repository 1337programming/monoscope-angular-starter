'use strict';

var mod = angular.module('app.home').service('homeService', function($interval) {
	mod.homeService(this, $interval);
});

module.exports = mod.homeService = function(homeService, $interval) {
	homeService.message = 'Hello World!';
	homeService.count = 2;
	$interval(function() {
		homeService.count++;
	}, 1000);
};