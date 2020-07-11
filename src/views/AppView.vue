<template>
  <div>
    <ul
      class="nav justify-content-center nav-pills nav-justified"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <router-link class="nav-link active" to="/app/pet" data-toggle="tab"
          >怪獸主頁</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/app/about" data-toggle="tab"
          >怪獸成就</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/app/deal" data-toggle="tab"
          >零股交易</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/app/knowledge" data-toggle="tab"
          >怪獸寶典</router-link
        >
      </li>
    </ul>
    <router-view v-if="token" />
  </div>
</template>

<script>
import cookie from "../utils/cookie";

export default {
  data() {
    return {
      token: cookie.get("token"),
    };
  },
  mounted() {
    if (!this.token) {
      this.$router.push({ path: "/" });
    }
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
  padding: 15px;
}
ul#myTab.nav.justify-content-center.nav-pills.nav-justified {
  background-color: rgb(132, 223, 226);
}
.nav-link {
  font-size: 15.4px;
}
</style>
