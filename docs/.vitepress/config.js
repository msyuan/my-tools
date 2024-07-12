/*
 * @Description: VitePress配置文件
 * @Author: laoyuan
 * @Date: 2023-10-10 15:06:13
 */

// 头部导航
import topNav from "./topNav";
import { vitePressNote } from "./sideBar/vitePressBar";

export default {
  title: "我的工具",
  description: "一个我的分类我做主的分类工具",
  // 打包目录
  outDir: "../dist",
  /** 打包项目的根目录 */
  base: "/my-tools/",
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  // 主题配置
  themeConfig: {
    // 导航上的logo
    logo: "/logo.png",
    // 当为false时，隐藏logo右边的标题，字符串时就显示标题
    siteTitle: "我的工具",
    // 导航栏配置
    nav: topNav,
    // 左侧导航栏
    sidebar: {
      "/note/vitePress": vitePressNote,
    },
    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",
    // 编辑链接
    editLink: {
      pattern: "https://github.com/msyuan/my-tools",
      text: "在 github 上编辑此页",
    },
    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      copyright: "Copyright © 2024-present Lao Yuan",
    },
    // 社交和项目链接地址配置
    socialLinks: [{ icon: "github", link: "https://github.com/msyuan/my-tools" }],
    // 搜索
    // algolia: {
    //   apiKey: "your_api_key",
    //   indexName: "index_name",
    // },
    // returnToTopLabel: "返回顶部", 未生效，所以自己手动写了一些返回顶部的组件
    lastUpdatedText: "最后更新",
    // 默认是 next page
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
};
