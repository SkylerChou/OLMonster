<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>編號</th>
        <th>成交價</th>
        <th>漲跌</th>
        <th>交易量</th>
        <th>持股數</th>
        <th>購買成本</th>
      </tr>
      <tr
        id="stock"
        v-for="(item, index) in stocks"
        :key="index"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        <th>{{ item.num }}</th>
        <th :style="item.color">{{ item.dealprice }}</th>
        <th :style="item.color">{{ item.updown }}</th>
        <th>{{ item.Tv }}</th>
        <th>{{ item.have }}</th>
        <th>{{ item.cost }}</th>
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
import Calculator from "@/components/Calculator/index.vue";

export default {
  name: "Home",
  components: {
    Chart,
    Calculator
  },
  data() {
    return {
      stocks: [
        {
          num: 2888,
          name: "華南金 ",
          dealprice: 20,
          updown: 2,
          Tv: 100,
          have: 0,
          cost: 0,
          type: "金融股",
          color: "color: green"
        }
      ]
    };
  }
};
</script>

<style src="./style.css" scoped></style>
