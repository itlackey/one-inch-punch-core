const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'oip',
        libraryTarget: 'umd',
        filename: 'oip.js',
        path: path.resolve(__dirname, 'dist')
    }
};