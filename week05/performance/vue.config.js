// vue.config.js
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://10.0.41.55:6080/',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // '^/meteorological': '/', // 重写接口
        },
      },
    },
  },
}