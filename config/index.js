'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

// 用于处理路径统一的问题
const path = require('path')

module.exports = {
    // 开发环境的配置
    dev: {
        // Paths
        assetsSubDirectory: 'static',                   // 静态资源文件夹
        assetsPublicPath: '/',                          // 发布路径
        // 一般解决跨域请求api
        proxyTable: {
            '/': {
                target: 'http://localhost:8081',     // 目标url
                changeOrigin: true,                     // 是否跨域
                pathRewrite: {
                    '^/': ''
                }
            }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080,                 // dev-server的端口号，可以自行更改
        autoOpenBrowser: false,     // 是否自定代开浏览器
        errorOverlay: true,         // 查询错误
        notifyOnErrors: true,       // 通知错误
        poll: false,                // poll轮询，webpack为我们提供devserver是可以监控文件改动的，有些情况下却不能工作，可以设置一个轮询解决

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,
        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',        // webpack用于方便调试的配置

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,       // devtool的配置当文件名插入新的hash导致清除缓存时是否生成source maps,默认为true

        cssSourceMap: true        // 是否开启cssSourceMap
    },
    // 生产编译环境下的一些配置
    build: {
        // 下面是相对路径的拼接
        index: path.resolve(__dirname, '../dist/index.html'),

        // 下面定义的是静态资源的根目录 也就是dist目录
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',          // 下面定义的是静态资源的公开路径，也就是真正的引用路径

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,                      // 是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
        productionGzipExtensions: ['js', 'css'],    // 定义要压缩哪些类型的文件

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report     // 是否开启打包后的分析报告
    }
}