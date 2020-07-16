<script>
import cookie from "../../utils/cookie";
import Story from "@/components/Story/index.vue";
export default {
  components: {
    Story,
  },
  data() {
    return {
      account: "",
      password: "",
      confirmPassword: "",
      nickname: "",
    };
  },
  methods: {
    loginClicked() {
      this.$axios
        .post("http://104.199.134.68:8080/user/login", {
          account: this.account,
          password: this.password,
        })
        .then((res) => {
          // console.log(res.data);
          cookie.set("token", res.data.message);
          if (res.data.status == 200) {
            this.$router.push({ path: "/app/pet" });
          } else if (!(this.account == "") && res.data.status == 403) {
            alert("登入失敗");
          }
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
            nickname: this.nickname,
            birth: this.birth,
          })
        )
        .then((res) => {
          // console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
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
          >怪獸介紹</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="appIntro-tab"
          data-toggle="tab"
          href="#appIntro"
          role="tab"
          aria-controls="appIntro"
          aria-selected="false"
          >APP介紹</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="login-tab"
          data-toggle="tab"
          href="#login"
          role="tab"
          aria-controls="login"
          aria-selected="false"
          >登入/註冊</a
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
        <div class="container">
          <div class="flex">
            <div id="title">
              <h1>怪物故事</h1>
            </div>
            <div id="block">
              <Story />
            </div>
            <div id="title">
              <h1>怪物介紹</h1>
            </div>
            <div id="block">
              <div class="img">
                <img src="../../assets/dino1.png" height="250px" />
              </div>
              <h2>花椰菜</h2>
              <h3>天真樂觀的賣萌擔當</h3>
              <div class="p">
                <div class="container-fluid">
                  <p>
                    雖然傻呆卻有顆真摯的心。 外表有點粗線條，聲音卻細小，
                    夢想是跟大家交朋友。
                  </p>
                </div>
              </div>
            </div>
            <div id="block">
              <div class="img">
                <img src="../../assets/cat2.png" height="250px" />
              </div>
              <h2>嗨揪</h2>
              <h3>愛生氣的怪獸</h3>
              <div class="p">
                <div class="container-fluid">
                  <p>
                    方塊貓是隻食量驚人超愛美食的果凍怪。
                    在一次實驗意外被創造出來，導致外表奇特，
                    超愛調皮搗蛋，捉弄主人。
                  </p>
                </div>
              </div>
            </div>
            <div id="block">
              <div class="img">
                <img src="../../assets/fox1.png" height="250px" />
              </div>
              <h2>函吉</h2>
              <h3>失憶守護神</h3>
              <div class="p">
                <div class="container-fluid">
                  <p>
                    因為從樹上掉下來敲到頭，失去了記憶。
                    傳聞之前是某座森林的守護神， 所以對於保護弱小非常執著，
                    大家都非常喜歡牠。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="appIntro"
        role="tabpanel"
        aria-labelledby="appIntro-tab"
        style="height: 100vh"
      >
        <div id="block">
          <div class="container">
            <h1 id="APPIntroduction">APP介紹</h1>
            <h3>史上最萌的零股投資教學</h3>
            <img src="../../assets/qmon03.png" />
            <img src="../../assets/qmon04.png" />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="login"
        role="tabpanel"
        aria-labelledby="login-tab"
        style="height: 100vh"
      >
        <div class="login-wrap">
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">登入</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">註冊</label>
            <div class="login-form">
              <form action>
                <div class="sign-in-htm">
                  <div class="group">
                    <label for="Username" class="label">
                      使用者帳號
                      <!-- 備註必填 -->
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="input"
                      v-model="account"
                      id="Username"
                      placeholder="必填，帳號"
                      required
                    />
                  </div>

                  <div class="group">
                    <label for="Password" class="label">
                      密碼
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      class="input"
                      v-model="password"
                      id="Password"
                      placeholder="必填，密碼"
                      required
                    />
                  </div>

                  <div class="group">
                    <input
                      type="submit"
                      class="button"
                      @click="loginClicked"
                      value="登入"
                    />
                  </div>
                  <div class="hr"></div>
                </div>
                <div class="sign-up-htm">
                  <div class="group">
                    <label for="user" class="label">帳號</label>
                    <input
                      id="user"
                      v-model="account"
                      type="text"
                      class="input"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">密碼</label>
                    <input
                      id="pass"
                      v-model="password"
                      type="password"
                      class="input"
                      data-type="password"
                    />
                  </div>
                  <div class="group">
                    <label for="repPass" class="label">密碼確認</label>
                    <input
                      id="repPass"
                      v-model="confirmPassword"
                      type="password"
                      class="input"
                      data-type="password"
                    />
                  </div>
                  <div class="group">
                    <label for="nick" class="label">暱稱</label>
                    <input
                      id="nick"
                      v-model="nickname"
                      type="text"
                      class="input"
                    />
                  </div>
                  <div class="group">
                    <input
                      type="submit"
                      class="button"
                      value="確認"
                      @click="registerClicked"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./style.css" scoped></style>
