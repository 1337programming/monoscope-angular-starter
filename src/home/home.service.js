'use strict';

angular.module('app.home').service('homeService', function($interval) {
  var homeService = this;

  homeService.message = 'Service Example';
  homeService.count = 0;
  homeService.incrementCount = function() {
    homeService.count++;
  };
});
