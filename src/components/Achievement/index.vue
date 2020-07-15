<template>
  <div class="container-fluid">
    <div class="all">
      <h1>任務</h1>
      <div class="content">
        <div class="box">
          <div>
            <ul>
              <h2>
                <img class="check" src="@/assets/svg/check1.svg" v-if="!isFinish[0]" />
                <img class="check" src="@/assets/svg/check2.svg" v-if="isFinish[0]" />
                <del v-if="isFinish[0]">學習新知識</del>
                <span v-if="!isFinish[0]">學習新知識</span>
              </h2>
              <h2>
                <img class="check" src="@/assets/svg/check1.svg" v-if="!isFinish[1]" />
                <img class="check" src="@/assets/svg/check2.svg" v-if="isFinish[1]" />
                <del v-if="isFinish[1]">餵怪獸吃飯</del>
                <span v-if="!isFinish[1]">餵怪獸吃飯</span>
              </h2>
            </ul>
          </div>
        </div>
      </div>
      <h1>成就</h1>
      <div class="row">
        <div class="col-4" v-for="(item, index) in srcs" :key="index">
          <img :src="item.src" v-if="!isActive[index]" />
          <img :src="srcsShow[index].src" v-if="isActive[index]" />
          <h3>{{item.name}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "@/utils/cookie";
export default {
  data() {
    return {
      isFinish: [],
      isActive: [],
      srcs: [
        {
          src: require("../../assets/achievementOrIcon/achievement01_false.png"),
          name: "全勤達標"
        },
        {
          src: require("../../assets/achievementOrIcon/achievement02_false.png"),
          name: "學霸達成"
        },
        {
          src: require("../../assets/achievementOrIcon/achievement03_false.png"),
          name: "馬卡龍殺手"
        },
        {
          src: require("../../assets/achievementOrIcon/achievement04_false.png"),
          name: "糕點大師"
        },
        {
          src: require("../../assets/achievementOrIcon/achievement05_false.png"),
          name: "火鍋達人"
        },
        {
          src: require("../../assets/achievementOrIcon/achievement06_false.png"),
          name: "我是土豪"
        }
      ],
      srcsShow: [
        {
          src: require("../../assets/achievementOrIcon/achievement01.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement02.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement03.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement04.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement05.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement06.png")
        }
      ]
    };
  },
  mounted() {
    let key = "Bearer " + cookie.get("token");
    this.$axios
      .get("http://104.199.134.68:8080/user/getachievementdata", {
        headers: {
          Authorization: key
        }
      })
      .then(res => {
        // console.log(res.data);
        this.isActive = res.data.message;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
    this.$axios
      .get("http://104.199.134.68:8080/user/getmission", {
        headers: {
          Authorization: key
        }
      })
      .then(res => {
        // console.log(res.data);
        this.isFinish = res.data.message;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  }
};
</script>

<style  src="./style.css" scoped>
</style>