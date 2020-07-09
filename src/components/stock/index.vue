<template>
  <div class="column">
    <div class="col-sm-6">
      <div class="card" v-for="(item,index) in classes" :key="index">
        <div class="card-body">
          <h2 class="card-title">{{item.name}}</h2>
          <!-- <p class="card-text">{{item.title}}</p> -->
          <!-- <a :href="item.link" class="btn btn-primary" target="_blank">閱讀</a> -->
          <div class="container">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >走勢圖</button>
            <!-- Modal -->
            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">走勢圖</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <Chart />

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >買入 / 賣出</button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">股票名稱</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <Calculator />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart/index.vue";
import Calculator from "@/components/Calculator/index.vue";

export default {
  name: "Home",
  components: {
    Chart,
    Calculator
  },
  data() {
    return {
      classes: [
        {
          name: "華南金  (2880) ",
          title: "為什麼要投資理財？",
          type: "金融股",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/90"
        },
        {
          name: "台　泥 (1101) ",
          title: "複利的力量",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/91"
        },
        {
          name: "鴻　海 (2317)",
          title: "理財前要先理債",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/93"
        },
        {
          name: "台積電 (2330)",
          title: "72法則",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/92"
        },
        {
          name: "聯發科 (2454)",
          title: "可怕的通貨膨脹",
          link: "https://www.cmoney.tw/learn/course/cmoney/topic/94"
        }
      ]
    };
  }
};
</script>

<style src="./style.css" scoped>
</style>