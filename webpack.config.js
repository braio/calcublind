const path = require('path');

module.exports = {
    entry: './input.js',
    output: {
        filename: "./script.js",
        path: path.resolve(__dirname)
    },
}