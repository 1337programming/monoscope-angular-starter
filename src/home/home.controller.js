'use strict';

angular.module('app.home').controller('HomeController', function(homeService, HomeFactory) {
  var vm = this;
  vm.homeService = homeService;
  vm.HomeFactory = HomeFactory;
});
