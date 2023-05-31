/*
 * @Description:
 * @Author: 李超越
 * @Date: 2023-05-31 09:33:42
 * @LastEditTime: 2023-05-31 17:37:43
 * @LastEditors: 李超越
 */
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      port: 8888,
      open: true,
    },
    // plugins配置里加下面的代码
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
