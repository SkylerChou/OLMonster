<template>
  <div class="container-fluid">
    <div class="pet">
      <img :src="link" />
    </div>
    <div id="info">
      <div>
        <span>現金: {{ cash }} 股票: {{ stock }} 總資產: {{ cash + stock }}</span>
        <!-- Small modal -->
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target=".bd-example-modal-sm"
        >切換怪獸</button>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >簽到</button>

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
                <h5 class="modal-title" id="exampleModalCenterTitle">每日簽到</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">簽到成功</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="container">
                <div class="row">
                  <div class="col" id="sel">
                    <img src="@/assets/gif/dino1.gif" />
                    <button
                      type="button"
                      class="btn btn-success"
                      data-dismiss="modal"
                      @click="change1()"
                    >選牠</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col" id="sel">
                    <img src="@/assets/gif/cat1.gif" />
                    <button
                      type="button"
                      class="btn btn-success"
                      data-dismiss="modal"
                      @click="change2()"
                    >選牠</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col" id="sel">
                    <img src="@/assets/gif/fox1.gif" />
                    <button
                      type="button"
                      class="btn btn-success"
                      data-dismiss="modal"
                      @click="change3()"
                    >選牠</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="button-group">
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-sm1"
          style="width:150px;"
        >
          <div class="column">
            <img src="@/assets/svg/shop.svg" />
            商店
          </div>
        </button>
        <div
          class="modal fade bd-example-modal-sm1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">怪獸商店</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="contianer-fuild">
                  <div class="img">
                    <h2>怪物住宅</h2>
                    <div class="con">
                      <img src="../../assets/shop/house1.png" />
                      <br />
                      <span>
                        {{ marName }}
                        <br />
                        ${{ wood }}
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                      <br />
                      <img src="../../assets/shop/house2.png" />
                      <div>
                        <span>
                          {{ cakeName }}
                          <br />
                          ${{ house }}
                        </span>
                        <br />
                        <button type="button" class="btn btn-info">購買</button>
                      </div>
                    </div>
                    <img src="../../assets/shop/house3.png" />
                    <div>
                      <span>
                        {{ hotpotName }}
                        <br />
                        ${{ flat }}
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <h2>怪物食品</h2>
                    <img src="../../assets/shop/food1.png" />
                    <div>
                      <span>
                        {{ food1name }}
                        <br />
                        ${{ food1 }}
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <img src="../../assets/shop/food2.png" />
                    <div>
                      <span>
                        {{ food2name }}
                        <br />
                        ${{ food2 }}
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <img src="../../assets/shop/food3.png" />
                    <div>
                      <span>
                        {{ food3name }}
                        <br />
                        ${{ food3 }}
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feed">
        <div class="food">
          <img src="../../assets/shop/food1.png" />
          <p>馬卡龍</p>
          <p>持有數量: {{ mar }}</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
        <div class="food">
          <img src="../../assets/shop/food2.png" />
          <p>草莓蛋糕</p>
          <p>持有數量: {{ cake }}</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
        <div class="food">
          <img src="../../assets/shop/food3.png" />
          <p>相撲火鍋</p>
          <p>持有數量: {{ hotpot }}</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import cookie from "@/utils/cookie";
export default {
  data() {
    return {
      date = new Date(timestamp * 1000),
      dataValues = [
   date.getFullYear(),
   date.getMonth()+1,
   date.getDate(),
   date.getHours(),
   date.getMinutes(),
   date.getSeconds(),
],
      link: require("@/assets/gif/dino1.gif"),
      cash: 0,
      stock: 0,
      total: 0,
      mar: 0,
      marName: "小木屋",
      cake: 0,
      cakeName: "獨棟豪宅",
      hotpot: 0,
      hotpotName: "帝寶",
      wood: 8000,
      house: 80000,
      flat: 800000,
      food1: 100,
      food1name: "馬卡龍",
      food2: 500,
      food2name: "草莓蛋糕",
      food3: 1000,
      food3name: "相撲火鍋",
    };
  },
  update() {
    let key = "Bearer " + cookie.get("token");
    this.$axios
      .get("http://104.199.134.68:8080//user/userfocusmonster", {
        headers: { Authorization: key }
      })
      .then(res => {
        console.log(res.data);
        if (res.data.message.monster.id == 1) {
          this.link = require("@/assets/gif/dino1.gif");
        } else if (res.data.message.monster.id == 2) {
          this.link = require("@/assets/gif/cat1.gif");
        } else if (res.data.message.monster.id == 3) {
          this.link = require("@/assets/gif/fox1.gif");
        } else if (res.data.message.monster.id == 4) {
          this.link = require("@/assets/gif/dino2.gif");
        } else if (res.data.message.monster.id == 5) {
          this.link = require("@/assets/gif/cat2.gif");
        } else if (res.data.message.monster.id == 6) {
          this.link = require("@/assets/gif/fox2.gif");
        } else if (res.data.message.monster.id == 7) {
          this.link = require("@/assets/gif/dino3.gif");
        } else if (res.data.message.monster.id == 8) {
          this.link = require("@/assets/gif/cat3.gif");
        } else if (res.data.message.monster.id == 9) {
          this.link = require("@/assets/gif/fox3.gif");
        }
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
    change1() {
      this.link = require("@/assets/gif/dino1.gif");
    },
    change2() {
      this.link = require("@/assets/gif/cat1.gif");
    },
    change3() {
      this.link = require("@/assets/gif/fox1.gif");
    }
  },

  mounted() {
    let key = "Bearer " + cookie.get("token");
    this.$axios
      .get("http://104.199.134.68:8080/user/userfocusmonster", {
        headers: {
          Authorization: key
        }
      })
      .then(res => {
        console.log(res.data);
        if (res.data.message.monster.id == 1) {
          this.link = require("@/assets/gif/dino1.gif");
        } else if (res.data.message.monster.id == 2) {
          this.link = require("@/assets/gif/cat1.gif");
        } else if (res.data.message.monster.id == 3) {
          this.link = require("@/assets/gif/fox1.gif");
        } else if (res.data.message.monster.id == 4) {
          this.link = require("@/assets/gif/dino2.gif");
        } else if (res.data.message.monster.id == 5) {
          this.link = require("@/assets/gif/cat2.gif");
        } else if (res.data.message.monster.id == 6) {
          this.link = require("@/assets/gif/fox2.gif");
        } else if (res.data.message.monster.id == 7) {
          this.link = require("@/assets/gif/dino3.gif");
        } else if (res.data.message.monster.id == 8) {
          this.link = require("@/assets/gif/cat3.gif");
        } else if (res.data.message.monster.id == 9) {
          this.link = require("@/assets/gif/fox3.gif");
        }
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
    this.$axios
      .get("http://104.199.134.68:8080/store/userhave", {
        headers: { Authorization: key }
      })
      .then(res => {
        // console.log(res.data);
        for (let i = 0; i < res.data.message.length; i++) {
          if (res.data.message[i].store.id == 1) {
            this.cake = res.data.message[i].number;
          } else if (res.data.message[i].store.id == 2) {
            this.hotpot = res.data.message[i].number;
          } else if (res.data.message[i].store.id == 3) {
            this.mar = res.data.message[i].number;
          }
        }
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
    this.$axios
      .get("http://104.199.134.68:8080/user/getsalaryweb", {
        headers: { Authorization: key }
      })
      .then(res => {
        // console.log(res.data);
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
    this.$axios
      .get("http://104.199.134.68:8080/user/getdata", {
        headers: {
          Authorization: key
        }
      })
      .then(res => {
        // console.log(res.data);
        this.isActive = res.data.message;
        this.cash = res.data.message.cash;
        this.stock = res.data.message.stock;
        this.total = res.data.message.totalAsset;
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  }
};
</script>

<style src="./style.css" scoped></style>
