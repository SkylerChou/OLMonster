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
            <div>
              <img src="@/assets/svg/home.svg" />
            </div>
            <div>主頁</div>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/about"
          data-toggle="tab"
        >
          <div class="container">
            <div>
              <img src="@/assets/svg/bag.svg" />
            </div>
            怪獸相關
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/deal/allStock"
          data-toggle="tab"
        >
          <div class="container">
            <div>
              <img src="@/assets/svg/stock.svg" />
            </div>
            交易
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/knowledge"
          data-toggle="tab"
        >
          <div class="container">
            <div>
              <img src="@/assets/svg/book.svg" />
            </div>
            寶典
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-nowrap"
          to="/app/rank"
          data-toggle="tab"
        >
          <div class="container">
            <div>
              <img src="@/assets/rank.png" width="26px" />
            </div>
            排行榜
          </div>
        </router-link>
      </li>
      <li>
        <div class="container" style="bordor:1px solid black">
          <div>
            <img class="user" src="@/assets/user.png" width="30px" />
            <span>HI~{{ user }}</span>
          </div>
          <button
            type="button"
            class="btn btn-warning text-nowrap"
            @click="logout()"
          >
            登出
          </button>
          <button
            type="button"
            class="btn btn-warning text-nowrap"
            v-if="user == '小資訓練家'"
            @click="register()"
            style="margin-left:10px"
          >
            綁定
          </button>
        </div>
      </li>
    </ul>
    <router-view v-if="token" />
  </div>
</template>

<script>
import api from "../utils/api";
import cookie from "../utils/cookie";
export default {
  data() {
    return {
      user: "",
      token: cookie.get("token"),
    };
  },
  mounted() {
    if (!this.token) {
      this.$router.push({ path: "/" });
    }
    api
      .getdata()
      .then((res) => {
        // console.log(res.data);
        this.user = res.data.message.nickname;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
    logout() {
      cookie.del("token");
      this.$router.push({ path: "/" });
    },
    register() {
      this.$router.push({ path: "/app/register" });
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
.user {
  margin-bottom: 8px;
}
</style>
