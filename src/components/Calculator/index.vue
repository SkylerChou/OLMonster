<template>
  <div>
    <p>持有股票: {{stock}} 餘額: {{money}}</p>
    <form class="calculator" name="calc">
      <div class="value">{{result}}</div>
      <span class="num clear" @click="reset()">C</span>
      <span class="num buy" @click="print('買都買')">BUY</span>
      <span class="num" @click="caculate(7)" value="7">7</span>
      <span class="num" @click="caculate(8)" value="8">8</span>
      <span class="num" @click="caculate(9)" value="9">9</span>
      <span class="num" @click="caculate(4)" value="4">4</span>
      <span class="num" @click="caculate(5)" value="5">5</span>
      <span class="num" @click="caculate(6)" value="6">6</span>
      <span class="num sell" @click="print('賣都賣')">SELL</span>
      <span class="num" @click="caculate(3)" value="3">3</span>
      <span class="num" @click="caculate(2)" value="2">2</span>
      <span class="num" @click="caculate(1)" value="1">1</span>
      <span class="num" @click="caculate(10)" value="0">0</span>
      <span class="num" @click="caculate(100)" value="100">00</span>
      <span class="num equal" @click="print('買爆')">MAX</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      result: 0,
      stock: 0,
      money: 30000
    };
  },
  methods: {
    show() {},
    caculate(value) {
      this.result += value;
    },
    reset() {
      this.result = 0;
    },
    print(Sting) {
      console.log(Sting);
    }
  }
};
</script>

<style src="./style.css" scoped></style>
