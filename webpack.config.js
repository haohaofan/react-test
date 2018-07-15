var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'production',
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/js/root.js",
    module: {
        rules: [
            {//ES6、JSX处理
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "env", "react"
                            ],
                            plugins: [
                                "react-html-attrs",//添加组件的插件配置
                                //antd按需加载
                                ["import", {"libraryName": "antd", "libraryDirectory": "es", "style": "css"}] // `style: true` 会加载 less 文件
                            ],
                            compact: true,
                        }
                    }
                ],
            },
            {//CSS处理
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader?modules",
                // use: [
                //     {loader: 'style-loader'},
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true,
                //             // importLoaders:1,
                //             //  localIdentName: '[path][name]__[local]__[hash:base64:5]' //模块的css类名进行压缩 Configure the generated ident
                //         }
                //     }
                // ]
            },
            {//antd样式处理
                test: /\.css$/,
                exclude: /(src)/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:1,
                        }
                    }
                ]
            },
        ]
    },
    output: {
        path: __dirname,
        filename: "./dist/bundle.js",
        chunkFilename: '[name].bundle.js',
    },
    //  optimization: {
    //    splitChunks: {
    //      chunks: 'all'
    //    }
    // },
    devServer: {
        contentBase: './',//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        port: 8086//更改端口号，默认8080
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
