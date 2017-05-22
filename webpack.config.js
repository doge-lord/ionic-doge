var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var PATHS = {
    src: path.join(__dirname, '/src'),
    build: path.join(__dirname, '/dist')
};

module.exports = {
    entry: {
        dist: PATHS.src + '/dist.ts'
    },
    output: {
        path: PATHS.build,
        filename: 'dist.js',
        library: 'IonicForms',
        libraryTarget: 'umd'
    },
    externals: [
        nodeExternals()
    ],
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: PATHS.src + '/**/*.scss',
                to: PATHS.build
            }
        ], {
                ignore: [
                    'src/pages/**/*.*'
                ]
            })
    ]
};