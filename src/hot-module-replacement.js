'use strict';

var angular = require('angular'); 
var moduleRequire;
var controllerRequire;
var modules = resetLoad();
angular.module('loader', modules);
if (module.hot) {
  console.log('HI!', controllerRequire.id);
  module.hot.accept([controllerRequire.id], function() {
    console.log('Accepting!!!');
    resetLoad();
    var injector = angular.element(document.body).injector();
    var $state = window.$state = injector.get('$state');
    $state.transitionTo($state.current, $state.params, {
      reload: true,
      inherit: false,
      notify: true 
    });
  });
}


function resetLoad() {
  moduleRequire = require.context('./', true, /\.module\.*js$/);
  var modules = requireAll(moduleRequire, 'name');

  controllerRequire = require.context('./', true, /\.controller\.*js$/);
  requireAll(controllerRequire);

  return modules;
}


function requireAll(req, prop) {
  var values = [];
  angular.forEach(req.keys(), function(key) {
      var val = req(key);
      if (prop) {
        val = val[prop];
      }
      if (val) {
        values.push(val);
      }
  });
  return values;
}