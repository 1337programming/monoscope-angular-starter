'use strict';
require('./navbar.scss');
angular.module('navbar').directive('navbar', function() {
    return {
        templateUrl: './navbar/navbar.html'
    };
});
