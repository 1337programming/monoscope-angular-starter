'use strict';

module.exports = angular.module('cart', []).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('cart', {
    url: '/cart',
    controller: 'CartController',
    controllerAs: 'cart',
    templateUrl: './cart/cart.html'
  });
  $urlRouterProvider.otherwise('/cart');
});
