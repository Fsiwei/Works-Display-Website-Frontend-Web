import { createApp } from "vue";
import "@/style/reset.css";
import App from "./App.vue";

// 引入全局组件
import WebsiteHeader from "@/components/website_header/index.vue";
import WebsiteFooter from "@/components/website_footer/index.vue";

// 引入 vue-router 核心插件并安装
import router from "@/router";
// 引入 element-plus 和它的样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入 element-plus 的国际化文件
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import pinia from "@/store";
import "@/mock/user.js";
import "@/mock/mockServer.js";
import axios from "axios";

const app = createApp(App);

// 定义全局组件
app.component("WebsiteHeader", WebsiteHeader);
app.component("WebsiteFooter", WebsiteFooter);

// 安装 vue-router
app.use(router);

// 安装 element-plus 插件
// 配置 element-plus 国际化文件
app.use(ElementPlus, {
  locale: zhCn,
});
// 安装 pinia 仓库
app.use(pinia);
// 挂载全局对象
app.config.globalProperties.$axios = axios; // ？
// app.config.globalProperties.$http = axios; // ？
import "./permisstion";
// 挂载点在 index.html 静态页面中
app.mount("#app");
