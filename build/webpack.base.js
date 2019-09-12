const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = false

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

// console.log(process.env)
module.exports = () => {
    return {
        entry: [
            "babel-polyfill",
            path.join(__dirname, '../', '/src/main.js')
        ],
        output: {
            path: path.resolve(__dirname, '../', 'dist'),
            filename: 'assets/js/yytest.js'
        },

        module: {
            rules: [
                //解析Vue
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                // // 处理scss
                // {
                //     test: /\.scss$/,
                //     use: [
                //         devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // style-loader 将 JS 字符串生成为 style 节点
                //         // 'style-loader',
                //         'css-loader', // 将 CSS 转化成 CommonJS 模块
                //         'postcss-loader', // 浏览器前缀
                //         'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
                //     ]
                // },

                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/images'
                        }
                    }]
                }
            ]
        },

        resolve: {
            extensions: ['*', '.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src')
            }
        },


        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebPackPlugin({
                template: path.join(__dirname, '../', "/public/index.html"), //要复制的html模板
                filename: path.join(__dirname, '../', "/dist/yy.html") //复制后dist命名的文件名字
            }),
            new CleanWebpackPlugin()
        ]
    }
}