<template>
  <div class="column">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <!-- <h2 class="card-title">{{name}}</h2>
          <p class="card-text">{{title}}</p>-->
          <h2 class="card-title">第一課</h2>
          <p class="card-text">為什麼要投資理財？</p>
          <a
            href="https://www.cmoney.tw/learn/course/cmoney/topic/90"
            class="btn btn-primary"
            target="_blank"
          >閱讀</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: "第一課",
    title: "為什麼要投資理財？",
    link: ""
  }
};
</script>

<style src="./style.css" scoped>
</style>