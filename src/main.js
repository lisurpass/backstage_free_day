/*
 * @Description:
 * @Author: 李超越
 * @Date: 2023-05-31 09:33:42
 * @LastEditTime: 2023-05-31 17:48:41
 * @LastEditors: 李超越
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "normalize.css/normalize.css";
import "./assets/reset.css";
import Particles from "particles.vue3"; // 引入
createApp(App)
  .use(store)
  .use(router)
  .use(Particles)
  .use(ElementPlus)
  .mount("#app");
