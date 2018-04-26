const path = require('path');

module.exports = {
    entry: "./js/languageSelection.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    }
}