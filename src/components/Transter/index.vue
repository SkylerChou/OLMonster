<template>
  <div class="container-fluid">
    <form>
      <div class="form-group">
        <label for="exampleInputAccount">帳號</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputAccount"
          placeholder="Enter Account"
          v-model="account"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputNickname">暱稱</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputNickname"
          placeholder="Enter Nickname"
          v-model="nickname"
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
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <button type="submit" class="btn btn-primary" @click="transformuser()">
        確認
      </button>
    </form>
  </div>
</template>

<script>
import md5 from "md5";
import api from "../../utils/api";
export default {
  data() {
    return {
      account: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      email: "",
    };
  },
  methods: {
    transformuser() {
      if (this.password == this.confirmPassword) {
        let encryption = md5(this.password);
        console.log(encryption);
      } else {
        alert("密碼輸入錯誤");
        return;
      }

      api
        .transformuser({
          account: this.account,
          password: this.password,
          confirmPassword: this.confirmPassword,
          nickname: this.nickname,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            alert("綁定成功");
            this.$router.push({ path: "/app/pet" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style src="./style.css" scoped></style>
