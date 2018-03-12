/**
 * Created by hongpao on 2018/3/12.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
    /**
     * 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
     * 这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。
     * 在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
     */
    entry: {
        portal: './src/portal.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: '/assets/'
        // filename: 'bundle_[hash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            // 基础 URL 地址, 根据环境变量加载不同的配置文件
            ENV_BASE_URL: JSON.stringify(__dirname + "/rjs/config/" + (process.env.NODE_ENV || "dev"))
        })
    ],
    // devServer: {
    //     port: 7000,
    //     contentBase: "./page",//本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // },
    module: {
        loaders: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader", options: {
                    strictMath: true,
                    noIeCompat: true
                }
            }]
        },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }]
    },
    externals: {
        /**
         * 告诉 webpack 不要将 react  react-dom 打包进去, html 手动引入
         */
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};