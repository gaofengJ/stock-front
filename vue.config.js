const webpack = require('webpack')
const path = require('path')
const projectRoot = path.resolve(__dirname)

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/stock' : '/',
  // 构建时的输出目录
  outputDir: projectRoot + '/dist',
  // 放置生成的静态资源(js、css、img、fonts)的目录
  assetsDir: 'static',
  // html的输出路径
  indexPath: 'index.html',
  // production环境的SourceMap
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
    return {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          styles: path.join(__dirname, 'src/styles'),
          '@layouts': path.join(__dirname, 'src/layouts'),
          '@components': path.join(__dirname, 'src/components'),
          '@services': path.join(__dirname, 'src/services'),
          '@data': path.join(__dirname, 'src/data'),
          '@utils': path.join(__dirname, 'src/utils'),
          '@config': path.join(__dirname, 'src/config'),
          '@core': path.join(__dirname, 'src/core'),
          '@routes': path.join(__dirname, 'src/routes')
        },
        unsafeCache: true,
        symlinks: false
      },
      plugins: [
        new webpack.DefinePlugin({
          __ENV__: JSON.stringify(process.env.ENV || 'dev')
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery',
          _: 'lodash'
        })
      ]
    }
  },
  chainWebpack: config => {
    console.log(path.resolve(projectRoot, 'src'))
    config.resolve.alias
      .set('@', path.resolve(projectRoot, 'src'))
  },
  runtimeCompiler: true,
  transpileDependencies: [
    'element-ui',
    'xmldom'
  ],
  // 配置多个代理
  devServer: {
    port: 8080,
    https: false,
    open: false,
    sockHost: 'http://localhost:8080',
    hot: true, // 热加载
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
