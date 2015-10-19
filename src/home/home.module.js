'use strict';
var angular = require('angular');
var homeModule = module.exports = {};
homeModule.name = 'app.home';
var uiRouter = require('angular-ui-router');

angular.module(homeModule.name, [uiRouter]).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: 'home',
    templateUrl: '<h1>{{home.message}}</h1>'
  });
  $urlRouterProvider.otherwise('/');
});