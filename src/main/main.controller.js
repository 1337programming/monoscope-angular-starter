'use strict';
require('./main.scss');

angular.module('main').controller('MainController', function($scope) {
    $scope.items = [
        {
            title: 'This is the first article',
            description: 'Welcome to the exciting world of writing blogs. I can\'t wait to get more done with this.'
    }, {
            title: 'This is the first article',
            description: 'Welcome to the exciting world of writing blogs. I can\'t wait to get more done with this.'
    },
    {
            title: 'This is the first article',
            description: 'Welcome to the exciting world of writing blogs. I can\'t wait to get more done with this.'
    }, {
            title: 'This is the first article',
            description: 'Welcome to the exciting world of writing blogs. I can\'t wait to get more done with this.'
    }
    ];
});
