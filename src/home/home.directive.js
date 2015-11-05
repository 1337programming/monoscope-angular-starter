'use strict';

angular.module('app.home').directive('home', function() {
  var home = {};

  home.controller = function() {
    var vm = this;
    vm.message = 'Directive';
  };
  home.controllerAs = 'sample';
  home.template = '<h1>{{sample.message | example}}</h1>';
  return home;
});
