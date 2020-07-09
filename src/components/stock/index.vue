<template>
  <div class="column">
    <div class="col-sm-6">
      <div class="card" v-for="(item,index) in classes" :key="index">
        <div class="card-body">
          <h2 class="card-title">{{item.name}}</h2>
          <p class="card-text">{{item.title}}</p>
          <a :href="item.link" class="btn btn-primary" target="_blank">閱讀</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        {
          name: "第一課",
          title: "為什麼要投資理財？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/90"
        },
        {
          name: "第二課",
          title: "複利的力量",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/91"
        },
        {
          name: "第三課",
          title: "理財前要先理債",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/93"
        },
        {
          name: "第四課",
          title: "72法則",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/92"
        },
        {
          name: "第五課",
          title: "可怕的通貨膨脹",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/94"
        },
        {
          name: "第六課",
          title: "什麼是消費者物價指數？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/95"
        },
        {
          name: "第七課",
          title: "財富自由的真諦是什麼？",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/96"
        }
      ]
    };
  }
};
</script>

<style src="./style.css" scoped>
</style>