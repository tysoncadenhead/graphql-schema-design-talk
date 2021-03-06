const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    externals: [nodeExternals()],
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.json'
        ]
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.gql$/, loader: 'text-loader' },
            { test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" }
        ],
    },
};