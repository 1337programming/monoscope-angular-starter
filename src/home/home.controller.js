'use strict';
var angular = require('angular');
var homeController = module.exports = {};
var mod = angular.module('app.home').controller('HomeController', function($interval) {
  mod.initHomeController(this, $interval);
});

mod.initHomeController = function(vm, $interval) {
	vm.message = 'Hello World!';
};