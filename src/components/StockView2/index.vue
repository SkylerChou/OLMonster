<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>名稱</th>
        <th>平均價</th>
        <th>持股數</th>
        <!-- <th>購買成本</th> -->
      </tr>
      <tr
        id="stock"
        v-for="(item, index) in stocks"
        :key="index"
        @click="chart(serial[index])"
      >
        <th>{{ name[index] }} {{ serial[index] }}</th>
        <th>{{ price[index] }}</th>
        <th>{{ userhave[index] }}</th>
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
      dealNum: [],
      userhave: [],
      sellprice: [],
    };
  },
  mounted() {
    api
      .userholdallstock()
      .then((res) => {
        console.log(res.data);
        this.stocks = res.data.message;
        this.serial = this.stocks.map((item) => item.stockId);
        this.name = this.stocks.map((item) => item.stockName);
        this.price = this.stocks.map((item) => item.avgPrice);
        // this.updown = this.stocks.map(item => item[index]);
        this.userhave = this.stocks.map((item) => item.units);
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
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
