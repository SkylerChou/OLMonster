<template>
  <div class="container">
    <h2><b> 0050 元大台灣50</b></h2>
    <div id="chart"><canvas id="lineChart"></canvas></div>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./lineChart.js";

export default {
  data() {
    return {
      planetChartData: planetChartData,
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
  },
  mounted() {
    this.createChart("lineChart", this.planetChartData);
  },
};
</script>

<style src="./style.css" scoped></style>
