'use strict';
var angular = require('angular');
module.exports = 'app.home';
var uiRouter = require('angular-ui-router');

angular.module(module.exports, [uiRouter]).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    controller: homeController,
    controllerAs: 'home',
    template: '<h1>{{home.message}}</h1>'
  });
  $urlRouterProvider.otherwise('/');
});

var homeController = require('./home.controller');