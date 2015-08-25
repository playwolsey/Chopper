var path = require('path'),
    webpack = require('webpack'),
    node_modules_dir = path.resolve(__dirname, 'node_modules'),
    pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');

var config = {
    entry: {
        index: path.resolve(__dirname, 'public/javascripts/index/index.js'),
        //mobile: path.resolve(__dirname, 'app/mobile.js'),
        vendors: ['react']
    },
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules_dir],
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css' 
        }, {
            test: /\.less/,
            loader: 'style!css!less' 
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000' 
        }],
        noParse: [pathToReact]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;
