<template>
  <div class="container">
    <div class="title">
      <h1>排行榜</h1>
    </div>

    <table class="table">
      <tr>
        <th>玩家名稱</th>
        <th>獲利率</th>
      </tr>
      <tr v-for="(item, index) in rank" :key="index">
        <th>
          <img src="@/assets/crown.png" v-if="index == 0" />
          <img src="@/assets/second.png" v-if="index == 1" />
          <img src="@/assets/third.png" v-if="index == 2" />
          {{ item.nickname }}
          <img src="@/assets/crown.png" v-if="index == 0" />
          <img src="@/assets/second.png" v-if="index == 1" />
          <img src="@/assets/third.png" v-if="index == 2" />
        </th>
        <th>{{ item.assets }}</th>
      </tr>
    </table>
  </div>
</template>
<script>
import api from "@/utils/api";
export default {
  data() {
    return {
      rank: [],
    };
  },
  mounted() {
    api
      .findtop10()
      .then((res) => {
        // console.log(res.data.message);
        this.rank = res.data.message;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style src="./style.css" scoped></style>
