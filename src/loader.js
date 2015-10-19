'use strict';

var angular = require('angular'); 
var moduleRequire;
var controllerRequire;
var templateRequire;
var serviceRequire, serviceIds;
var modules = resetLoad();
angular.module('loader', modules).run(function($templateCache) {
  angular.forEach(templateRequire.keys(), function(key) {
    var val = templateRequire(key);
    $templateCache.put(key, val);
  });
});

if (module.hot) {
  //Controller, Service
  module.hot.accept([controllerRequire.id], function() {
    resetLoad();
    refreshState();
  });

  //Template
  module.hot.accept([templateRequire.id], function() {
    resetLoad();
    var injector = angular.element(document.body).injector();
    var $templateCache = injector.get('$templateCache');
    angular.forEach(templateRequire.keys(), function(key) {
      var val = templateRequire(key);
      $templateCache.put(key, val);
    });
    refreshState();
  });
}

function resetLoad() {
  moduleRequire = require.context('./', true, /\.module\.js$/);
  var modules = requireAll(moduleRequire, 'name');

  controllerRequire = require.context('./', true, /\.controller\.js$/);
  requireAll(controllerRequire);

  templateRequire = require.context('./', true, /\.html$/);

  serviceRequire = require.context('./', true, /\.service\.js$/);
  requireAll(serviceRequire);
  return modules;
}

function refreshState() {
  var injector = angular.element(document.body).injector();
  var $state = injector.get('$state');
  $state.transitionTo($state.current, $state.params, {
    reload: true,
    inherit: false,
    notify: true 
  });
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

function getAllIds(req) {
  var ids = [req.id];
  angular.forEach(req.keys(), function(key) {
    ids.push(req.resolve(key));
  });
  return ids;
}

function findNameForId(req, id) {
  var name = null;
    angular.forEach(req.keys(), function(key) {
      var keyId = req.resolve(key) + '';
      if (keyId === id) {
        name = key;
      }
    });
  return name;
}