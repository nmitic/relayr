const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3333',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/[name].css')
    ],
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}  
              }
            ]
          },
        {
            test: /\.(js)$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src'),
        }, 
        {
      test: /\.scss$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
            loader: "css-loader",
            options: {
              sourceMap: true
            }
        }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
        }]
      })),
    },]
    }
};
