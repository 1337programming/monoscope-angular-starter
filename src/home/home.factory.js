'use strict';

angular.module('app.home').factory('HomeFactory', function($interval) {
  var HomeFactory = {};

  HomeFactory.message = 'Factory Example';
  HomeFactory.count = 0;
  HomeFactory.incrementCount = function() {
    HomeFactory.count++;
  };
  return HomeFactory;
});
