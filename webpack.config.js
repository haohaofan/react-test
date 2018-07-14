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
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                "env","react"
                            ],
                            plugins: [
                                "react-html-attrs" ,//添加组件的插件配置
                                ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
                            ]
                        }
                    }
                ],
            },
            //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // importLoaders:1,
                            //  localIdentName: '[path][name]__[local]__[hash:base64:5]' //模块的css类名进行压缩 Configure the generated ident
                    }
                    }
                ]
            },
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/dist/bundle.js",
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
        port:8086//更改端口号，默认8080
    },
    plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
