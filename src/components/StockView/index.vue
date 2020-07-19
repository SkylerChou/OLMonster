<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>名稱</th>
        <th>股價</th>
        <th>漲跌</th>
        <th>成交量</th>
        <!-- <th>持股</th> -->
        <!-- <th>購買成本</th> -->
      </tr>
      <tr id="stock" v-for="(item, index) in stocks" :key="index" @click="chart()">
        <th>{{ name[index] }}</th>
        <th v-if="updown[index] == 0">{{ price[index] }}</th>
        <th v-if="updown[index] < 0" style=" color:green;">{{ price[index] }}</th>
        <th v-if="updown[index] > 0" style=" color:red;">{{ price[index] }}</th>
        <th v-if="updown[index] == 0">{{ updown[index] }}</th>
        <th v-if="updown[index] < 0" style=" color:green;">{{ updown[index] }}</th>
        <th v-if="updown[index] > 0" style=" color:red;">{{ updown[index] }}</th>
        <th>{{ dealNum[index] }}</th>
        <!-- <th>{{ item.have }}</th> -->
        <!-- <th>{{ item.cost }}</th> -->
      </tr>
    </table>

    <router-view />
  </div>
</template>

<script>
import api from "@/utils/api";
export default {
  data() {
    return {
      stocks: [],
      serial: [],
      name: [],
      price: [],
      updown: [],
      dealNum: []
      // userhave:[]
    };
  },
  mounted() {
    api
      .getallstockdaydata()
      .then(res => {
        // console.log(res.data);
        this.stocks = res.data.message;
        this.serial = this.stocks.map(item => item[0]);
        this.name = this.stocks.map(item => item[1]);
        this.price = this.stocks.map(item => item[2]);
        this.updown = this.stocks.map(item => item[5]);
        this.dealNum = this.stocks.map(item => item[3]);
        // this.userhave=this.stocks.map(item => item[3]);
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
    chart() {
      this.$router.push({ path: "/app/deal/chart" });
    }
  }
};
</script>

<style src="./style.css" scoped></style>
