 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, '../dist'),
   },
   plugins: [
     new HtmlWebpackPlugin({
         title: "My first webpack app",
         template: "./index.html"
     }),
     new CleanWebpackPlugin()
   ]
 };
