'use strict';
var angular = require('angular');
module.exports = 'HomeController';
angular.module('app.home').controller(module.exports, function() {
  this.message = 'Hello World!';
});