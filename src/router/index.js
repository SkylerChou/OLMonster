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
  // {
  //   path: "/app",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AppView.vue"),
  // },
  {
    path: "/mon",
    name: "Monster",
    component: () =>
      import(/* webpackChunkName: "Knowledge" */ "../views/Monster.vue"),
  },
  {
    path: "/app",
    name: "AppView",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/AppView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
