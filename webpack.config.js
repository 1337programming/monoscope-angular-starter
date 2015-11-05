var webpack = require('webpack');
var path = require('path');
var prod = process.env.prod;
var hot = process.env.hot;
var monoscope = process.env.monoscope;
//Variables
var plugins = [];
var dest;

//Setup Webpack
if (prod) {
    var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
    plugins.push(new ngAnnotatePlugin({
        add: true
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }));
    dest = path.join(__dirname, 'dist')
}
else {
    dest = path.join(__dirname, '.tmp');
}

if (monoscope) {
    var monoscopeAngular = require('monoscope-angular');
    monoscopeAngular.run();
}
module.exports = {
    context: __dirname,
    devServer: {
        historyApiFallback: true,
        port: 9000,
        contentBase: './src'
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        path: dest,
        filename: 'scripts.js'
    },
    resolve: {
        root: './bower_components'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    plugins: plugins
};


//Setup build
if (prod) {
    var err = function(err) {
        if (err) throw console.error(err);
    };
    var fs = require('fs-extra');
    var minify = require('html-minifier').minify;

    fs.emptyDir('./dist', function(err) {
        if (err) throw console.error(err);
        fs.readFile('./src/index.html', 'utf8', function(err, data) {
            if (err) throw console.error(err);
            var result = minify(data, {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeOptionalTags: true
            });
            fs.writeFile('./dist/index.html', result, err);
        });
    })


}
