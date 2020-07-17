<template>
  <div class="column">
    <div class="col-md-8">
      <div class="card" v-for="(item, index) in classes" :key="index">
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p class="card-text">{{ item.title }}</p>
          <a
            :href="item.link"
            class="btn btn-primary"
            target="_blank"
            @click="finish(index + 1)"
            >閱讀</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "@/utils/cookie";
let key = "Bearer " + cookie.get("token");

export default {
  data() {
    return {
      classes: [
        {
          name: "第一課",
          title: "為什麼要投資理財？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/90",
        },
        {
          name: "第二課",
          title: "複利的力量",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/91",
        },
        {
          name: "第三課",
          title: "理財前要先理債",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/93",
        },
        {
          name: "第四課",
          title: "72法則",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/92",
        },
        {
          name: "第五課",
          title: "可怕的通貨膨脹",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/94",
        },
        {
          name: "第六課",
          title: "什麼是消費者物價指數？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/95",
        },
        {
          name: "第七課",
          title: "財富自由的真諦是什麼？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/96",
        },
      ],
    };
  },
  methods: {
    finish(val) {
      this.$axios
        .get("http://104.199.134.68:8080/course/finishCourse", {
          headers: {
            Authorization: key,
          },
          params: {
            id: val,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
  },
  mounted() {
    this.$axios
      .get("http://104.199.134.68:8080/course/getallcourse", {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        console.log(res.data);
        // this.classes = res.data.message;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  },
};
</script>

<style src="./style.css" scoped></style>
