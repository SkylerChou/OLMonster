<template>
  <div>
    <ul
      class="nav justify-content-center nav-pills nav-justified"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <router-link
          class="nav-link active text-nowrap"
          to="/app/pet"
          data-toggle="tab"
        >
          <div class="container">
            <div><img src="@/assets/svg/home.svg" /></div>
            <div>主頁</div>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/about"
          data-toggle="tab"
          ><div class="container">
            <div><img src="@/assets/svg/bag.svg" /></div>
            成就
          </div></router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/deal"
          data-toggle="tab"
          ><div class="container">
            <div><img src="@/assets/svg/stock.svg" /></div>
            交易
          </div></router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/knowledge"
          data-toggle="tab"
          ><div class="container">
            <div><img src="@/assets/svg/book.svg" /></div>
            寶典
          </div></router-link
        >
      </li>
      <li>
        <div class="container">
          <div>
            <span>HI~{{ user }} </span>
          </div>
          <button
            type="button"
            class="btn btn-warning text-nowrap"
            @click="logout()"
          >
            登出
          </button>
        </div>
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
      user: "catta",
      token: cookie.get("token"),
    };
  },
  mounted() {
    if (!this.token) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    logout() {
      cookie.del("token");
      this.$router.push({ path: "/" });
    },
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
span {
  font-size: 20px;
}
</style>
