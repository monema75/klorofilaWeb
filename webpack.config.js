const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/js/index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};