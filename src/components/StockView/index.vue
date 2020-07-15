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
      <tr
        id="stock"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
        v-for="(item, index) in stocks"
        :key="index"
      >
        <th>{{name[index]}}</th>
        <th>{{price[index]}}</th>
        <th v-if="updown[index]==0">{{updown[index]}}</th>
        <th v-if="updown[index]<0" style=" color:green;">{{updown[index]}}</th>
        <th v-if="updown[index]>0" style=" color:red;">{{updown[index]}}</th>
        <th>{{dealNum[index]}}</th>
        <!-- <th>{{ item.have }}</th> -->
        <!-- <th>{{ item.cost }}</th> -->
      </tr>
    </table>
    <router-view />
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="container">
            <Chart />
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                placeholder="請輸入購買股數"
                aria-label="Recipient's username with two button addons"
                aria-describedby="button-addon4"
              />
              <div class="input-group-append" id="button-addon4">
                <button class="btn btn-danger" type="button">買入</button>
                <button class="btn btn-success" type="button">賣出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart/index.vue";
import cookie from "@/utils/cookie";
export default {
  components: {
    Chart
  },
  data() {
    return {
      stocks: [],
      serial: [],
      name: [],
      price: [],
      updown: [],
      dealNum: []
    };
  },
  mounted() {
    let key = "Bearer " + cookie.get("token");
    this.$axios
      .get("http://104.199.134.68:8080/stock/getallstockdaydata", {
        headers: {
          Authorization: key
        }
      })
      .then(res => {
        // console.log(res.data);
        this.stocks = res.data.message;
        this.serial = this.stocks.map(item => item[0]);
        this.name = this.stocks.map(item => item[1]);
        this.price = this.stocks.map(item => item[2]);
        this.updown = this.stocks.map(item => item[5]);
        this.dealNum = this.stocks.map(item => item[3]);
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  }
};
</script>

<style src="./style.css" scoped></style>
