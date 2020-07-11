<template> </template>

<script>
import Chart from "@/components/Chart/index.vue";
import Calculator from "@/components/Calculator/index.vue";

export default {
  name: "Home",
  components: {
    Chart,
    Calculator,
  },
  data() {
    return {
      classes: [
        {
          name: "華南金  (2880) ",
          title: "為什麼要投資理財？",
          type: "金融股",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/90",
        },
        {
          name: "台　泥 (1101) ",
          title: "複利的力量",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/91",
        },
        {
          name: "鴻　海 (2317)",
          title: "理財前要先理債",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/93",
        },
        {
          name: "台積電 (2330)",
          title: "72法則",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/92",
        },
        {
          name: "聯發科 (2454)",
          title: "可怕的通貨膨脹",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/94",
        },
      ],
    };
  },
};
</script>

<style src="./style.css" scoped></style>
