// vue.config.js
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
module.exports = {
    baseUrl: './', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：true | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules, 这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件， false将提高构建速度
    configureWebpack: config => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) {
            // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map';
        } else {
            // 生产环境配置
        }
    },
    chainWebpack: config => {
        // webpack链接API，用于生成和修改webpack配置，
        https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
            if (debug){
                // 本地开发配置
            }else{
                // 生产开发配置
            }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: {
        // 第三方插件配置
    },
    pwa: {
        // 单页插件相关配置
        // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:8888/api',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            },
        },
        disableHostCheck: true
    }
};
