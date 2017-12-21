const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.tpl.html',
        }),
    ]
};