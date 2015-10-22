'use strict';

angular.module('app.home').filter('example', function() {
	return function(input) {
		return input + ' Example';
	};
});
