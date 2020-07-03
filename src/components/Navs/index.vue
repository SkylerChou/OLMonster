<script>
import axios from "axios";
import cookie from "../../utils/cookie";
export default {
  data() {
    return {
      account: "",
      password: "",
      confirmPassword: "",
      nickname: "",
    };
  },
  name: "Login",
  //透過props傳入外部資料
  // props: {
  //   msg: String
  // },
  // //網頁名字
  // metaInfo: {
  //   title: "Login"
  // },
  methods: {
    loginClicked() {
      // this.$router.push("/login");
      axios
        .post("http://104.199.134.68:8080/login", {
          account: this.account,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          cookie.set("token", res.data.jwt);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerClicked() {
      axios
        .post("http://104.199.134.68:8080/register", {
          account: this.account,
          password: this.password,
          confirmPassword: this.confirmPassword,
          nickname: this.nickname,
        })
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
          id="story-tab"
          data-toggle="tab"
          href="#story"
          role="tab"
          aria-controls="story"
          aria-selected="false"
          >怪物故事</a
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
        <ul>
          <div id="block">
            <h1 id="title">怪物介紹</h1>
            <img src="../../assets/1.png" height="250px" />
            <h2>Q摸</h2>
            <h3>愛開玩笑的幸運星</h3>
            <p>
              Q摸是隻食量驚人超愛美食的大眼毛怪。
              <br />身高體大卻有雙7號半的小腳，走路時常跌倒。
              <br />下班超愛網購瞎拚買鞋，卻總找不到合腳的鞋，超苦惱。
            </p>
          </div>
          <div id="block">
            <img src="../../assets/2.png" height="250px" />
            <h2>Q呆</h2>
            <h3>天真樂觀的大胃王</h3>
            <p>
              Q摸從小的玩伴，是個天生的樂觀派，
              <br />雖然傻呆卻有顆真摯的心。
              <br />外表有點粗線條，聲音卻細小，常常被Q摸惡作劇跟使喚，
              <br />不管對他做什麼，他都很開心，夢想是跟大家交朋友。
              <br />非常有義氣，寧可當個傻蛋也不願拿變聰明取代友情。
              <br />
            </p>
          </div>
          <div id="block">
            <img src="../../assets/3.png" height="250px" />
            <h2>奇樂</h2>
            <h3>喪失記憶的殺手</h3>
            <div>
              是隻神秘的怪獸， 因為從樹上掉下來敲到頭，失去了記憶。
              <br />傳聞之前是個殺手， 因為不能留下DNA生物證據，
              <br />所以對整潔特別吹毛求疵，很愛打掃 全套的清潔用品一應俱全，
              <br />最近更迷上了”怦然心動的人生整理魔法”
              <br />可能想透過整理找回記憶的蛛絲馬跡吧。
              <br />
            </div>
          </div>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="story"
        role="tabpanel"
        aria-labelledby="story-tab"
        style="height: 100vh"
      >
        123
      </div>
      <div
        class="tab-pane fade"
        id="appIntro"
        role="tabpanel"
        aria-labelledby="appIntro-tab"
        style="height: 100vh"
      >
        <div id="block">
          <h1 id="APPIntroduction">APP介紹</h1>
          <h3>史上最萌的零股投資教學</h3>
          <img src="../../assets/qmon03.png" />
          <img src="../../assets/qmon04.png" />
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
