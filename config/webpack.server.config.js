var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './server'),
    output: {
        path: path.resolve(__dirname, './server-dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
