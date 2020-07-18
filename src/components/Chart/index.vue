<template>
  <div class="container-fluid">
    <div>
      <canvas id="lineChart"></canvas>
    </div>
    <div>
      <input type="number" />
    </div>
    <div>
      <button type="button" class="btn btn-danger">買入</button>
    </div>
    <div>
      <button type="button" class="btn btn-success">賣出</button>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./lineChart.js";

export default {
  data() {
    return {
      planetChartData: planetChartData
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("lineChart", this.planetChartData);
  }
};
</script>

<style src="./style.css" scoped></style>
