import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AppView from "@/views/AppView.vue";
import Pet from "@/components/Pet/index.vue";
import Stock from "@/components/Stock/index.vue";
import Knowledge from "@/components/Knowledge/index.vue";
import StockView from "@/components/StockView/index.vue";
import StockView2 from "@/components/StockView2/index.vue";
import Achievement from "@/components/Achievement/index.vue";

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
        component: Achievement,
      },
      {
        path: "deal",
        name: "deal",
        component: Stock,
        children: [
          {
            path: "allStock",
            name: "allStock",
            component: StockView,
          },
          {
            path: "myStock",
            name: "myStock",
            component: StockView2,
          },
        ],
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
