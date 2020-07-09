export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        // one line graph
        label: "Price of Month in this year",
        data: [0, 20, 30, 40, 67, 62, 27, 14, 20, 66, 81, 12],
        backgroundColor: "rgba(71, 183,132,.5)", // Blue
        borderColor: "#47b784",
        borderWidth: 2,
        pointRadius: 2,
      },
      // {
      //   // another line graph
      //   label: "Price of Month in last year",
      //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2, 60, 1, 2, 67],
      //   backgroundColor: [
      //     "rgba(71, 183,132,.5)", // Green
      //   ],
      //   borderColor: ["#47b784"],
      //   borderWidth: 2,
      //   pointRadius: 2,
      // },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default planetChartData;
