module.exports = {
  publicPath: './', // 部署应用时的基本 URL
  assetsDir: 'static', // build时放置生成的静态资源目录
  // lintOnSave: lint === 'true' ? true : lint,
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
};
