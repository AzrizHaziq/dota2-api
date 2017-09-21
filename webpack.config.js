var join = require('path').join
var include = join(__dirname, 'src')

module.exports = {
    entry : './src/index',
    output : {
        path : join(__dirname, 'dist'),
        libraryTarget : 'umd',
        library : 'dota2jsonapi'
    },
    devtool : 'source-map',
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : "babel-loader",
                include
            },
            {
                test : /\.json$/,
                loader : 'json-loader',
                include
            }
        ]
    }
}