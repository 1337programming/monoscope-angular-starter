'use strict';

var moduleRequire;
var controllerRequire;
var templateRequire;
var serviceRequire;
var factoryRequire;
var filterRequire;
var directiveRequire;
var configurationRequire;

if (module.hot) {
  require('./hmr').modifyAngular();
}

var modules = resetLoad();
angular.module('loader', modules).run(function($templateCache) {
  console.log(templateRequire.keys());
  angular.forEach(templateRequire.keys(), function(key) {
    var val = templateRequire(key);
    $templateCache.put(key, val);
  });
});

if (module.hot) {
  //Decline Configuration Phase Component Types
  module.hot.decline([configurationRequire.id]);

  //Template
  module.hot.accept([templateRequire.id], function() {
    resetLoad();
    require('./hmr').acceptTemplateChange(templateRequire);
  });

  //Service, Factory, Controller, Filter, Directive
  module.hot.accept([moduleRequire.id, serviceRequire.id, factoryRequire.id, controllerRequire.id, filterRequire.id, directiveRequire.id], function() {
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

  filterRequire = require.context('./', true, /\.filter\.js$/);
  requireAll(filterRequire);

  directiveRequire = require.context('./', true, /\.directive\.js$/);
  requireAll(directiveRequire);

  configurationRequire = require.context('./', true, /\.provider\.js$|\.constant\.js$|\.value\.js$|\.config\.js$|\.run\.js$|\.decorator\.js$/);
  requireAll(configurationRequire);

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
