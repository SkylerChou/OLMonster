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
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AppView.vue"),
  },
  {
    path: "/know",
    name: "Knowledge",
    component: () =>
      import(/* webpackChunkName: "Knowledge" */ "../views/Knowledge.vue"),
    // childred: [
    //   {
    //     path: "/know",
    //     name: "Knowledge",
    //     component: () =>
    //       import(/* webpackChunkName: "Knowledge" */ "../views/Knowledge.vue"),
    //   },
    //   {
    //     path: "/know",
    //     name: "Knowledge",
    //     component: () =>
    //       import(/* webpackChunkName: "Knowledge" */ "../views/Knowledge.vue"),
    //   },
    //   {
    //     path: "/know",
    //     name: "Knowledge",
    //     component: () =>
    //       import(/* webpackChunkName: "Knowledge" */ "../views/Knowledge.vue"),
    //   },
    // ],
  },
  {
    path: "/mon",
    name: "Monster",
    component: () =>
      import(/* webpackChunkName: "Knowledge" */ "../views/Monster.vue"),
  },
  {
    path: "/reg",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
