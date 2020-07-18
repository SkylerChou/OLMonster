<template>
  <div class="column">
    <div class="col-md-8">
      <div class="card" v-for="(item, index) in classes" :key="index">
        <div class="card-body">
          <h2 class="card-title">{{ item.headline }}</h2>
          <p class="card-text">{{ item.topic }}</p>
          <a
            :href="item.content"
            class="btn btn-primary"
            target="_blank"
            @click="finish(index + 1)"
          >閱讀</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";

export default {
  data() {
    return {
      classes: []
    };
  },
  methods: {
    finish(val) {
      api
        .finishCourse({
          id: val
        })
        .then(res => {
          console.log(res.data);
          api
            .finishmission1()
            .then(res => {
              console.log(res.data);
            })
            .catch(function(error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    }
  },
  mounted() {
    api
      .getallcourse()
      .then(res => {
        console.log(res.data);
        this.classes = res.data.message;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  }
};
</script>

<style src="./style.css" scoped></style>
