<template>
  <div class="container-fluid">
    <div class="all">
      <h1>成就</h1>
      <div class="row">
        <div class="col-4" v-for="(item, index) in srcs" :key="index">
          <img :src="item.src" v-if="!isActive[index]" />
          <h3 v-if="!isActive[index]">成就 {{index+1}}</h3>
        </div>
      </div>
      <div class="row" id="show">
        <div class="col-4" v-for="(item, index) in srcsShow" :key="index">
          <img :src="item.src" v-if="isActive[index]" />
          <h3 v-if="isActive[index]">成就 {{index+1}}</h3>
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
          src: require("../../assets/achievementOrIcon/achievement01_false.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement02_false.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement03_false.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement04_false.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement05_false.png")
        },
        {
          src: require("../../assets/achievementOrIcon/achievement06_false.png")
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