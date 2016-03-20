'use strict';

angular.module('cart').controller('CartController', function(CartFactory, $scope) {
  $scope.todos = ['one', 'two', 'three'];
	this.CartFactory = CartFactory;
});
