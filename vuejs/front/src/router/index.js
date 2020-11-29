/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 15:48:07
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import(/* webpackChunkName: "reg" */ "@/views/Reg.vue"),
    beforeEnter: (to, from, next) => {
      if (from.name === "Login") {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import(/* webpackChunkName: "forget" */ "@/views/Forget.vue"),
  },
  {
    path: "/user/:uid",
    name: "User",
    props: true,
    component: () => import(/* webpackChunkName: "user" */ "@/views/User.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "Index",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/channels/Index.vue"),
      },
      {
        path: "/index/:catalog",
        name: "Template1",
        component: () =>
          import(
            /* webpackChunkName: "template1" */ "@/views/channels/Template1.vue"
          ),
      },
    ],
  },
  {
    path: "/center",
    name: "Center",
    linkExactActiveClass: "layui-this",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "center" */ "@/views/Center.vue"),
    children: [
      {
        path: "",
        name: "UserCenter",
        component: () =>
          import(
            /* webpackChunkName: "usercenter" */ "@/components/user/Center.vue"
          ),
      },
      {
        path: "set",
        name: "Set",
        component: () =>
          import(
            /* webpackChunkName: "set" */ "@/components/user/Settings.vue"
          ),
        children: [
          {
            path: "",
            name: "Info",
            component: () =>
              import(
                /* webpackChunkName: "info" */ "@/components/user/common/MyInfo.vue"
              ),
          },
          {
            path: "pic",
            name: "Pic",
            component: () =>
              import(
                /* webpackChunkName: "uploadpic" */ "@/components/user/common/PicUpload.vue"
              ),
          },
          {
            path: "passwd",
            name: "Passwd",
            component: () =>
              import(
                /* webpackChunkName: "passwd" */ "@/components/user/common/Passwd.vue"
              ),
          },
          {
            path: "accounts",
            name: "Accounts",
            component: () =>
              import(
                /* webpackChunkName: "accounts" */ "@/components/user/common/Accounts.vue"
              ),
          },
        ],
      },
      {
        path: "post",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "post" */ "@/components/user/Post.vue"),
        children: [
          {
            path: "",
            name: "MyPost",
            component: () =>
              import(
                /* webpackChunkName: "mypost" */ "@/components/user/common/MyPost.vue"
              ),
          },
          {
            path: "mycollection",
            name: "MyCollection",
            component: () =>
              import(
                /* webpackChunkName: "mycollection" */ "@/components/user/common/MyCollection.vue"
              ),
          },
        ],
      },
      {
        path: "msg",
        name: "Msg",
        component: () =>
          import(/* webpackChunkName: "msg" */ "@/components/user/Msg.vue"),
      },
      {
        path: "others",
        name: "Others",
        component: () =>
          import(
            /* webpackChunkName: "others" */ "@/components/user/Others.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "layui-this",
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (token !== "" && token !== null) {
    store.commit("setToken", token);
    store.commit("setUserInfo", userInfo);
    store.commit("setIsLogin", true);
  }
  if (
    to.matched.some((record) => {
      record.meta.requiresAuth;
    })
  ) {
    const isLogin = store.state.isLogin;
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
