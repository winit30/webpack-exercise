 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   output: {
       filename: "[name].chunk.js",
       path: path.resolve(__dirname, '../dist'),
   },
   plugins: [
     new HtmlWebpackPlugin({
         title: "My first webpack app",
         template: "./index.html"
     }),
     new CleanWebpackPlugin()
   ],
   module: {
        rules: [
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {limit: 10000}
                    }
                ]
            }
        ]
    }
 };
