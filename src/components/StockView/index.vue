<template>
  <div class="container">
    <div>
      <h1>當前遊戲時間: {{date}}</h1>
    </div>
    <table class="table">
      <tr>
        <th>名稱</th>
        <th>股價</th>
        <th>漲跌</th>
        <th>成交量</th>
        <th>持股</th>
      </tr>
      <tr
        id="stock"
        v-for="(item, index) in stocks"
        :key="index"
        @click="chart(serial[index], name[index], price[index])"
      >
        <th>{{ name[index] }} ({{ serial[index] }})</th>
        <th v-if="updown[index] == 0">{{ price[index] }}</th>
        <th v-if="updown[index] < 0" style=" color:green;">{{ price[index] }}</th>
        <th v-if="updown[index] > 0" style=" color:red;">{{ price[index] }}</th>
        <th v-if="updown[index] == 0">{{ updown[index] }}</th>
        <th v-if="updown[index] < 0" style=" color:green;">{{ updown[index] }}</th>
        <th v-if="updown[index] > 0" style=" color:red;">{{ updown[index] }}</th>
        <th>{{ dealNum[index] }}</th>
        <th v-if="!ALLIndex(name, name2[holdIndex(name2, name[index])])">0</th>
        <th
          v-if="ALLIndex(name, name2[holdIndex(name2, name[index])])"
        >{{ userhave[holdIndex(name2, name[index])] }}</th>
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
      dealNum: [],
      name2: [],
      userhave: [],
      date: "1999/09/01",
    };
  },
  mounted() {
    api
      .getallstockdaydata()
      .then((res) => {
        // console.log(res.data);
        this.stocks = res.data.message;
        this.serial = this.stocks.map((item) => item[0]);
        this.name = this.stocks.map((item) => item[1]);
        this.price = this.stocks.map((item) => item[2]);
        this.updown = this.stocks.map((item) => item[5]);
        this.dealNum = this.stocks.map((item) => item[3]);
        // this.userhave=this.stocks.map(item => item[3]);
      })
      .catch(function (error) {
        console.log("請求失敗", error);
      });
    api
      .userholdallstock()
      .then((res) => {
        // console.log(res.data);
        this.stocks = res.data.message;
        this.name2 = this.stocks.map((item) => item.stockName);
        this.userhave = this.stocks.map((item) => item.units);
      })
      .catch(function (error) {
        console.log("請求失敗", error);
      });
    api
      .gettime()
      .then((res) => {
        // console.log(res.data);
        this.date = res.data.message;
      })
      .catch(function (error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
    holdIndex(hold, allID) {
      for (let k = 0; k < hold.length; k++) {
        if (hold[k] == allID) {
          return k;
        }
      }
    },
    ALLIndex(all, holdID) {
      for (let k = 0; k < all.length; k++) {
        if (holdID == all[k]) {
          return k;
        }
      }
    },
    chart(val) {
      this.$router.push({
        path: "/app/deal/chart",
        query: { stockId: val },
      });
    },
  },
};
</script>

<style src="./style.css" scoped></style>
