'use strict';

var mod = angular.module('app.home').controller('HomeController', function(homeService) {
  mod.HomeController(this, homeService);
});

mod.HomeController = function(vm, homeService) {
	vm.message = homeService.message;
	vm.homeService = homeService;
};