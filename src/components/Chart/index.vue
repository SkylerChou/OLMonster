<template>
  <div class="flex">
    <div>
      <h2>0050 台灣50</h2>
      <span style="color:red;">股價:94.4 漲幅:1.01</span>
      <div class="container-fluid" id="chart">
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
          v-if="series[0].data.length !== 0"
        ></apexchart>
      </div>
    </div>
    <div class="group">
      <input type="number" />
      <div>
        <button type="button" class="btn btn-danger">買入</button>
      </div>
      <div>
        <button type="button" class="btn btn-success">賣出</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../utils/api";

export default {
  data() {
    return {
      series: [
        {
          name: "股價",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        colors: ["green"],
        xaxis: {
          labels: {
            show: false,
          },
          categories: [
            "1日",
            "2日",
            "3日",
            "4日",
            "5日",
            "6日",
            "7日",
            "8日",
            "9日",
            "10日",
            "11日",
            "12日",
            "13日",
            "14日",
            "15日",
            "16日",
            "17日",
            "18日",
            "19日",
            "20日",
            "21日",
            "22日",
            "23日",
            "24日",
            "25日",
            "26日",
            "27日",
            "28日",
            "29日",
            "30日",
          ],
        },
      },
    };
  },
  mounted() {
    api
      .get30before({ stockId: 1101 })
      .then((res) => {
        if (res.data.status == 200) {
          // console.log(res.data.message.before30price);
          this.series[0].data = res.data.message.before30price;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>

<style src="./style.css" scoped></style>
