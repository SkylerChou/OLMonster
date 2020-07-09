<template>
  <div>
    <ul class="nav justify-content-center nav-pills nav-justified" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >怪獸主頁</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="mission-tab"
          data-toggle="tab"
          href="#mission"
          role="tab"
          aria-controls="mission"
          aria-selected="false"
        >怪獸相關</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="deal-tab"
          data-toggle="tab"
          href="#deal"
          role="tab"
          aria-controls="deal"
          aria-selected="false"
        >零股交易</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="invest-tab"
          data-toggle="tab"
          href="#invest"
          role="tab"
          aria-controls="invest"
          aria-selected="false"
        >怪獸寶典</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <Pet />
      </div>
      <div
        class="tab-pane fade"
        id="deal"
        role="tabpanel"
        aria-labelledby="deal-tab"
        style="height: 100vh"
      >
        <div class="container">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#example"
          >走勢圖</button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="example"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">走勢圖</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <Chart />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="container" id="cal">
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
      <div
        class="tab-pane fade"
        id="invest"
        role="tabpanel"
        aria-labelledby="invest-tab"
        style="height: 100vh"
      >
        <div id="con">
          <div>
            <h1 class="title text-font-bold">怪獸投資學</h1>
            <Knowledge />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="mission"
        role="tabpanel"
        aria-labelledby="mission-tab"
        style="height: 100vh"
      >正在施工中..未開放</div>
    </div>
  </div>
</template>

<script>
import Pet from "@/components/Pet/index.vue";
import Chart from "@/components/Chart/index.vue";
import Calculator from "@/components/Calculator/index.vue";
import Knowledge from "@/components/Knowledge/index.vue";
import cookie from "../utils/cookie";

export default {
  name: "Home",
  components: {
    Pet,
    Chart,
    Calculator,
    Knowledge
  },
  methods: {
    Clicked() {
      this.$axios
        .get("http://104.199.134.68:8080/user/getmission", Headers)
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerClicked() {
      this.$axios
        .post(
          "http://104.199.134.68:8080/user/register",
          this.$qs.stringify({
            account: this.account,
            password: this.password,
            confirmPassword: this.confirmPassword,
            nickname: this.nickname
          })
        )
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#myTab {
  padding-top: 20px;
  padding-bottom: 20px;
}
ul#myTab.nav.justify-content-center.nav-pills.nav-justified {
  background-color: rgb(132, 223, 226);
}
.container {
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#cal {
  margin: 20px;
}
.modal-title {
  font-size: 25px;
}
.title {
  padding: 30px;
}
#con {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(184, 135, 11, 0.692);
}
</style>
