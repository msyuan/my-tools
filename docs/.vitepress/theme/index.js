/*
 * @Description: 自定义主题配置
 * @Author: laoyuan
 * @Date: 2024-07-10 09:05:14
 */
// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { useData } from "vitepress";
import home from "./components/home.vue";
import backTop from "./components/backTop.vue";
import docFooter from "./components/docFooter.vue";
import down from "./components/down.vue";

import DefaultTheme from "vitepress/theme";
import "./styles/custom.scss";
import "./styles/site.scss";
import "./styles/rainbow.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ElementPlus);
    // 注册全局组件
    app.component("Home", home);
    app.component("Down", down);
    app.component("BackTop", backTop);
  },
  // 自定义布局配置
  Layout: () => {
    const props = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(DefaultTheme.Layout, props, {
      // 自定义文档底部
      "doc-after": () => h(docFooter),
    });
  },
};
