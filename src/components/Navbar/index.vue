<script>
import cookie from "../../utils/cookie";
export default {
  data() {},
  methods: {
    loginClicked() {
      this.$axios
        .post("http://104.199.134.68:8080/user/login", {
          account: this.account,
          password: this.password
        })
        .then(res => {
          console.log(res);
          cookie.set("token", res.data.jwt);
        })
        .catch(function(error) {
          console.log(error);
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
            nickname: this.nickname
          })
        )
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<template>
  <div>
    <ul class="nav justify-content-center nav-pills nav-justified" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >我的怪獸</a>
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
        >零股交易</a>
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
        >怪獸投資學</a>
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
        >每日任務</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div>
          <div>
            <img src="../../assets/monster.png" />
          </div>
          <div id="buttin-group">
            <button type="button" class="btn btn-success">商店</button>
            <button type="button" class="btn btn-warning">餵食</button>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="deal"
        role="tabpanel"
        aria-labelledby="deal-tab"
        style="height: 100vh"
      >123</div>
      <div
        class="tab-pane fade"
        id="invest"
        role="tabpanel"
        aria-labelledby="invest-tab"
        style="height: 100vh"
      >789</div>
      <div
        class="tab-pane fade"
        id="mission"
        role="tabpanel"
        aria-labelledby="mission-tab"
        style="height: 100vh"
      >456</div>
    </div>
  </div>
</template>
<style src="./style.css" scoped></style>
