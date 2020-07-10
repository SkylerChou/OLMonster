<template>
  <div>
    <ul
      class="nav justify-content-center nav-pills nav-justified"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >怪獸主頁</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="mission-tab"
          data-toggle="tab"
          href="#mission"
          role="tab"
          aria-controls="mission"
          aria-selected="false"
          >怪獸相關</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="deal-tab"
          data-toggle="tab"
          href="#deal"
          role="tab"
          aria-controls="deal"
          aria-selected="false"
          >零股交易</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="invest-tab"
          data-toggle="tab"
          href="#invest"
          role="tab"
          aria-controls="invest"
          aria-selected="false"
          >怪獸寶典</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <Pet />
      </div>
      <div
        class="tab-pane fade"
        id="deal"
        role="tabpanel"
        aria-labelledby="deal-tab"
        style="height: 100vh"
      >
        <div id="con">
          <div>
            <h1 class="title text-font-bold">投資市場</h1>
            <Stock />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="invest"
        role="tabpanel"
        aria-labelledby="invest-tab"
        style="height: 100vh"
      >
        <div id="con">
          <div>
            <h1 class="title text-font-bold">怪獸投資學</h1>
            <Knowledge />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="mission"
        role="tabpanel"
        aria-labelledby="mission-tab"
        style="height: 100vh"
      >
        <h1>正在施工中..未開放</h1>
      </div>
    </div>
  </div>
</template>

<script>
const Pet = () => import("@/components/Pet/index.vue");
const Knowledge = () => import("@/components/Knowledge/index.vue");
const Stock = () => import("@/components/Stock/index.vue");
// import Pet from "@/components/Pet/index.vue";
// import Knowledge from "@/components/Knowledge/index.vue";
// import Stock from "@/components/Stock/index.vue";
import cookie from "../utils/cookie";

export default {
  name: "Home",
  components: {
    Pet,
    Knowledge,
    Stock,
  },
  methods: {
    Clicked() {
      this.$axios
        .get({
          url: "http://104.199.134.68:8080/user/getmission",
          headers: { Authorization: "Bearer " + this.cookie.get("token") },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    registerClicked() {
      this.$axios
        .post(
          "http://104.199.134.68:8080/user/register",
          this.$qs.stringify({
            account: this.account,
            password: this.password,
            confirmPassword: this.confirmPassword,
            nickname: this.nickname,
          })
        )
        .then((res) => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#myTab {
  padding-top: 15px;
  padding-bottom: 20px;
}
ul#myTab.nav.justify-content-center.nav-pills.nav-justified {
  background-color: rgb(132, 223, 226);
}
.title {
  padding: 20px;
}
#con {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(184, 135, 11, 0.692);
}
a {
  font-size: 15.4px;
}
</style>
