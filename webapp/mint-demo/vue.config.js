/*
 * @Author: zzj
 * @Date: 2021-03-31 15:32:48
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-01 15:30:31
 * @Description:
 */
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    // GraphQL Loader
    svgRule
      .test(/\.svg$/)
      .include.add(resolve("./src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve("./src/assets/icons"));
  },
  css: {
    loaderOptions: {
      sass: {
        // 这里的选项会传递给 css-loader
        prependData: `@import "@/assets/styles/_variables.scss";`,
      },
    },
  },
};
