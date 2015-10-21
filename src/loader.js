'use strict';

var angular = require('angular');
var moduleRequire;
var controllerRequire;
var templateRequire;
var serviceRequire;
var factoryRequire;
if (module.hot) {
  var origAngularModule = angular.extend(angular.module, {});
  angular.module = function(name, requires, configFn) {
    var mod = origAngularModule(name, requires, configFn);

    mod.serviceCache = mod.serviceCache || {};
    var origAngularService = angular.extend(mod.service, {});
    mod.service = function(recipeName, serviceFunction) {
      var exists = mod.serviceCache[recipeName];
      if (exists && getInjector()) {
        mod.serviceCache[recipeName].resetObject();
        var returnedValue = getInjector().invoke(serviceFunction, mod.serviceCache[recipeName]);
        if (returnedValue) {
          angular.extend(mod.serviceCache[recipeName], returnedValue);
        }

        refreshState();
      }
      else {
        origAngularService(recipeName, serviceFunction);
        mod.config(function($provide) {
          $provide.decorator(recipeName, function($delegate) {
            $delegate.resetObject = function() {
              for (var prop in this) {
                if (prop !== 'resetObject') {
                  delete this[prop];
                }
              }
              this.resetObject = $delegate.resetObject;
            };
            mod.serviceCache[recipeName] = $delegate;
            return mod.serviceCache[recipeName];
          });
        });
      }
      return mod;
    };

    var origAngularFactory = angular.extend(mod.factory, {});
    mod.factory = function(recipeName, factoryFunction) {
      var exists = mod.serviceCache[recipeName];
      if (exists && getInjector()) {
        mod.serviceCache[recipeName].resetObject();
        var returnedValue = getInjector().invoke(factoryFunction);
        angular.extend(mod.serviceCache[recipeName], returnedValue);

        refreshState();
      }
      else {
        origAngularFactory(recipeName, factoryFunction);
        mod.config(function($provide) {
          $provide.decorator(recipeName, function($delegate) {
            $delegate.resetObject = function() {
              for (var prop in this) {
                if (prop !== 'resetObject') {
                  delete this[prop];
                }
              }
              this.resetObject = $delegate.resetObject;
            };
            mod.serviceCache[recipeName] = $delegate;
            return mod.serviceCache[recipeName];
          });
        });
      }
      return mod;
    };
    return mod;
  };
}

var modules = resetLoad();
angular.module('loader', modules).run(function($templateCache) {
  angular.forEach(templateRequire.keys(), function(key) {
    var val = templateRequire(key);
    $templateCache.put(key, val);
  });
})

if (module.hot) {

  //Controller
  module.hot.accept([controllerRequire.id], function() {
    resetLoad();
    refreshState();
  });

  //Template
  module.hot.accept([templateRequire.id], function() {
    resetLoad();
    var $templateCache = getInjector().get('$templateCache');
    angular.forEach(templateRequire.keys(), function(key) {
      var val = templateRequire(key);
      $templateCache.put(key, val);
    });
    refreshState();
  });

  //Service, Factory
  module.hot.accept([serviceRequire.id, factoryRequire.id], function() {
    resetLoad();
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

  factoryRequire = require.context('./', true, /\.factory\.js$/);
  requireAll(factoryRequire);
  return modules;
}

function refreshState() {
  var $state = getInjector().get('$state');
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

function getInjector() {
  return angular.element(document.body).injector();
}
window.injector = getInjector;
