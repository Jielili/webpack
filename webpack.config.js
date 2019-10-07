const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"Output Managment"
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

   
}