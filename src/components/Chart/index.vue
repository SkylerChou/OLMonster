<template>
  <div class="container">
    <h2>
      <b>0050 元大台灣50</b>
    </h2>
    <canvas id="lineChart"></canvas>
    <div>
      <ul>
        <p>殖利率: DY</p>
        <p>歷年股利: D</p>
        <p>本益比: PE</p>
        <p>EPS: EPS</p>
        <p>月營收:MR</p>
        <p>ROE: ROE</p>
      </ul>
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
