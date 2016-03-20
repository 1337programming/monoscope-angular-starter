'use strict';

var func = function ($scope, CartServiceTwo) {
  $scope.message = CartServiceTwo.helloWorld();
  $scope.todos = ['one', 'two', 'three'];
};
angular.module('cartTwo').controller('CartControllerTwo', func);

module.exports = func;
