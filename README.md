# Monoscope Angular - Starter App
Angular Starter Project for the monoscope-angular shortcut toolkit.

## Installation
Clone the repository, cd into the directory, and install the dependencies:
```
git clone https://github.com/1337programming/monoscope-angular-starter.git
cd monoscope-angular-starter
npm install
```

## Development
To run development mode, type the command: `npm run dev`
The application will start on port 9000 with hot module replacement (HMR) turned on.
Monoscope will be running on port 8045.

## Production
To build the application, type the command: `npm run prod`

## Architecture
The application-wide module is found in index.js. 
Index.js is to contain all external dependencies, as well as the `loader` module.
The loader module is responsible for requiring all angular 1 components. 

All modules that export the module object are in the dependency list of `loader`. For example:

```javascript
module.exports = angular.module('myNewModule');
```

## Hot Module Replacement
The following files and naming conventions have HMR turned on in dev:
 - Controllers with filenames ending in `.controller.js`
 - Templates with filenames ending in `.html`
 - Services with filenames ending in `.service.js`
 - Factories with filenames ending in `.factory.js`
 - Filters with filenames ending in `.filter.js`
 - Directives with filenames ending in `.directive.js`

The following files are required through the loader, but refresh the browser (as they are configuration):
 - Providers ending in `.provider.js`
 - Constants ending in `.constant.js`
 - Values ending in `.value.js`
 - Configs ending in `.config.js`
 - Runs ending in `.run.js`
 - Decorators ending in `.decorator.js`
 
