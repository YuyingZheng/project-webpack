const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.js')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = require('../config/prod.env')
console.log(env.NODE_ENV)

const devMode = env.NODE_ENV === 'development' ? true : false
    // const devMode = true
module.exports = merge(baseWebpackConfig(), {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            // 处理scss
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader', // 浏览器前缀
                    'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[hash].css", //这边的name和id是哪里来的？
            chunkFilename: "assets/css/[id].[hash].css",
        }),
    ]
})