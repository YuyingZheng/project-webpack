const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.js')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = merge(baseWebpackConfig(), {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[hash].css", //这边的name和id是哪里来的？
            chunkFilename: "assets/css/[id].[hash].css",
        }),
    ]
})