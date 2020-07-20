import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import api from "@/utils/api";
export default new Vuex.Store({
  state: {
    asset: 0,
  },
  mutations: {
    setAsset() {
      api
        .getdata()
        .then((res) => {
          this.state.asset = res.data.message.cash;
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
  },
  actions: {},
  modules: {},
});
