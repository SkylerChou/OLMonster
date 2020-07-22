<template>
  <div class="container-fluid">
    <button type="button" class="btn btn-warning" @click="returnHome()">回到首頁</button>
    <h1>忘記密碼</h1>
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
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <button type="submit" class="btn btn-primary" @click="sendEmail()">寄送</button>
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
      email: ""
    };
  },
  methods: {
    returnHome() {
      this.$router.push({ path: "/" });
    },
    sendEmail() {
      api
        .sendemail({
          account: this.account,
          email: this.email
        })
        .then(res => {
          // console.log(res.data);
          if (res.data.status == 200) {
            this.$router.push({ path: "/ResetPassword" });
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
