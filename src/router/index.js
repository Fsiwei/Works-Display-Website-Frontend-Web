// 引入 createRouter 方法，可用于创建路由器实例，可管理多个路由
import { createRouter, createWebHistory } from "vue-router";

// 暴露 createRouter 方法
export default createRouter({
  // 路由模式的设置
  history: createWebHistory(),
  // 管理路由
  routes: [
    // 第一个路由，首页
    {
      // 路由的路径
      path: "/home",
      name: "Home",
      // 标明使用的是哪个组件，此处使用的是路由懒加载的方式
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    // 第二个路由，登录/注册
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/login/index.vue"),
    },
    // 第三个路由，搜索
    {
      path: "/search",
      name: "Search",
      component: () => import("@/views/search/index.vue"),
    },
    // 第四个路由，上传
    {
      path: "/upload",
      name: "Upload",
      component: () => import("@/views/upload/index.vue"),
    },
    // 第五个路由，个人中心
    {
      path: "/user",
      name: "UserInfo",
      component: () => import("@/views/user/index.vue"),
      // 配置子路由
      children: [
        {
          path: "works",
          name: "UserInfoWork",
          component: () => import("@/views/user/works/index.vue"),
          meta: {
            title: "我的作品",
          },
        },
        {
          path: "message",
          name: "UserInfoMessage",
          component: () => import("@/views/user/message/index.vue"),
          meta: {
            title: "我的消息",
          },
          // 配置子路由
          children: [
            {
              path: "comment",
              name: "UserInfoComment",
              component: () => import("@/views/user/message/comment/index.vue"),
            },
            {
              path: "like",
              name: "UserInfoLike",
              component: () => import("@/views/user/message/like/index.vue"),
            },
            {
              path: "notice",
              name: "UserInfoNotice",
              component: () => import("@/views/user/message/notice/index.vue"),
            },
          ],
        },
        {
          path: "information",
          name: "Information",
          component: () => import("@/views/user/information/index.vue"),
          meta: {
            title: "个人信息",
          },
        },
        {
          path: "setting",
          name: "Setting",
          component: () => import("@/views/user/setting/index.vue"),
          meta: {
            title: "设置",
          },
        },
      ],
    },
    // 第六个路由，作品详情
    {
      path: "/workDetail",
      name: "WorkDetail",
      component: () => import("@/views/workDetail/index.vue"),
    },
    // 第七个路由，用户管理
    {
      path: "/userManage",
      name: "UserManage",
      component: () => import("@/views/userManage/index.vue"),
    },
    // 第八个路由，作品列表
    {
      path: "/workList",
      name: "WorkList",
      component: () => import("@/views/workList/index.vue"),
    },
    // 第九个路由，作品审核
    {
      path: "/review",
      name: "ReviewWork",
      component: () => import("@/views/reviewWork/index.vue"),
    },
    // 当访问到根时，立即重定向到 home 首页
    {
      path: "/",
      redirect: "/login",
    },
  ],
  // 滚动行为：控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
