// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
require('../src');
require('angular-mocks');
var context = require.context('./', true, /\.test\.js$/);
context.keys().forEach(context);
module.exports = context;