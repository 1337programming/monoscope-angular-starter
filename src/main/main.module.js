'use strict';

module.exports = angular.module('main', []).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: './main/main.html',
        controller: 'MainController'
    });
    $urlRouterProvider.otherwise('/');
});
