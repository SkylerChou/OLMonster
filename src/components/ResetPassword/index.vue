<template>
  <div class="container-fluid">
    <button type="button" class="btn btn-warning" @click="returnHome()">回到首頁</button>
    <h1>更改密碼</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputPassword">密碼</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword"
          placeholder="Enter Password"
          v-model="oldpassword"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword">密碼</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword"
          placeholder="Enter Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密碼確認</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Confirm Password"
          v-model="confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="resetPassword()">確認</button>
    </form>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {
  data() {
    return {
      oldpassword: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    returnHome() {
      this.$router.push({ path: "/" });
    },
    resetPassword() {
      if (this.password !== this.confirmPassword) {
        alert("密碼輸入錯誤");
        return;
      }

      api
        .resetpassword({
          password: this.oldpassword,
          newpassword: this.password,
          newpasswordcheck: this.confirmPassword
        })
        .then(res => {
          // console.log(res.data);
          if (res.data.status == 200) {
            this.$router.push({ path: "/" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style src="./style.css" scoped></style>
