import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AppView from "@/views/AppView.vue";
import Pet from "@/components/Pet/index.vue";
import Stock from "@/components/Stock/index.vue";
import Knowledge from "@/components/Knowledge/index.vue";

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
    component: AppView,
    children: [
      {
        path: "pet",
        name: "pet",
        component: Pet,
      },
      {
        path: "about",
        name: "about",
        component: Knowledge,
      },
      {
        path: "deal",
        name: "deal",
        component: Stock,
      },
      {
        path: "knowledge",
        name: "knowledge",
        component: Knowledge,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
