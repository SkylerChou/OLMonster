import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app",
    name: "AppView",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/AppView.vue"),
    children: [
      {
        path: "/main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "Register" */ "@/views/AppView.vue"),
      },
      {
        path: "/about",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "Register" */ "@/views/AppView.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "Register" */ "@/views/AppView.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "Register" */ "@/views/AppView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
