const path = require('path')

module.exports = {
    target: 'web',
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module:{
        rules: [],
    },
    externalsPresets: {
        node: true //in order to ignore built-in modules like path, fs, etc
    },
}