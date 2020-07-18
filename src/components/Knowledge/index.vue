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
import cookie from "@/utils/cookie";
let key = "Bearer " + cookie.get("token");

export default {
  data() {
    return {
      classes: []
    };
  },
  methods: {
    finish(val) {
      let data = {
        id: val
      };
      this.$axios
        .post(
          "http://104.199.134.68:8080/course/finishCourse",
          this.$qs.stringify(data),
          {
            headers: {
              Authorization: key
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.$axios
            .get("http://104.199.134.68:8080/user/finishmission1", {
              headers: {
                Authorization: key
              }
            })
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
    this.$axios
      .get("http://104.199.134.68:8080/course/getallcourse", {
        headers: {
          Authorization: key
        }
      })
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
