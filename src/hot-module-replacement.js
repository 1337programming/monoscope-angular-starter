'use strict';

var angular = require('angular');
var moduleRequire;
var modules = resetLoad();
angular.module('loader', modules);
if (module.hot) {
  console.log('HI!');
  module.hot.accept([moduleRequire.id], function() {
    console.log('Accepting!!!');
    resetLoad();
    var injector = angular.element(document.body).injector();
    var $state = injector.get('$state');
    $state.transitionTo($state.current, $state.params, {
      reload: true,
      inherit: false,
      notify: true
    });
    //var $rootScope = injector.get('$rootScope');
  });
}


function resetLoad() {
  var modules = [];
  moduleRequire = require.context('./', true, /\.module\.*js$/);
  angular.forEach(moduleRequire.keys(), function(mod) {
    if (/\.module\.js$/.test(mod)) {
      var moduleName = moduleRequire(mod);
      if (moduleName) {
        modules.push(moduleName);
      }
    }
  });
  return modules;
}
