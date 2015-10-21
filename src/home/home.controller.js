'use strict';

var mod = angular.module('app.home').controller('HomeController', function(homeService, HomeFactory) {
  mod.HomeController(this, homeService, HomeFactory);
});

mod.HomeController = function(vm, homeService, HomeFactory) {
  vm.homeService = homeService;
  vm.HomeFactory = HomeFactory;
};
