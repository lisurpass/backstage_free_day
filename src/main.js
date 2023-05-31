/*
 * @Description:
 * @Author: 李超越
 * @Date: 2023-05-31 09:33:42
 * @LastEditTime: 2023-05-31 11:35:28
 * @LastEditors: 李超越
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
