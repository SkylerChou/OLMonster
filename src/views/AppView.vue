<template>
  <div class="container">
    <div>
      <Chart />
    </div>
    <div>
      <Calculator />
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
  }
};
</script>

<style scoped>
.container {
  width: 2000px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  background: #f2ebf0;
}
</style>
