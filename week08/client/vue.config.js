const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin(),
    ],
  },
};
