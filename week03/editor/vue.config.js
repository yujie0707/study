const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/base': {
        target: 'http://localhost:3000/',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin(),
    ],
  },
};
