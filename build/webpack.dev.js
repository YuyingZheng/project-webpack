const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.js')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const env = require('../config/dev.env')
const devMode = env.NODE_ENV === 'development' ? true : false
module.exports = merge(baseWebpackConfig(), {
    devServer: {
        historyApiFallback: true, // 404的页面会自动跳转到/页面
        inline: true, //文件改变自动刷新页面
        port: 3800, // 服务器端口  ！！注意不要被占用了哦
        open: true
    },
    devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试,
    module: {
        rules: [
            // 处理scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // style-loader 将 JS 字符串生成为 style 节点
                    // 'style-loader',
                    'css-loader', // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader', // 浏览器前缀
                    'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 添加热替换插件
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '../', '/public/index.html'), //模板文件
            // path.join(__dirname, '/src/main.js')
            // template: "./public/index.html",
            inject: 'body' // js的script注入到body底部
        })
    ]
})