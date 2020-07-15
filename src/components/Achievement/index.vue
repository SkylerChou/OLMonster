<template>
  <div class="container-fluid">
    <div class="all">
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
  }
};
</script>

<style  src="./style.css" scoped>
</style>