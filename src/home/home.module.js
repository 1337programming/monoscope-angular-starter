'use strict';

module.exports = angular.module('app.home', []).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: 'home',
    templateUrl: './home/home.html'
  });
  $urlRouterProvider.otherwise('/');
});
