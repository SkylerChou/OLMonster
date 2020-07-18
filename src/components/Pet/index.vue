<template>
  <div class="container-fluid">
    <div class="pet" id="pet" :style="{backgroundImage: 'url('+url+')'}">
      <img :src="link" />
    </div>
    <div id="info">
      <div>
        <span>
          現金: {{ cash }}
          <br />
          股票: {{ stock }}
          <br />
          總資產: {{ cash + stock }}
        </span>
        <br />
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
          class="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModalCenter4"
        >切換住宅</button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalCenter4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body" style="font-size:30px;color:white;">
                <img class="house" src="../../assets/house/house2.jpg" />
                <button
                  type="button"
                  class="btn btn-success"
                  @click="changBabkground(6)"
                  v-if="haveCabin"
                >更換</button>
                <button type="button" class="btn btn-dark disabled" v-if="!haveCabin">未持有</button>
                <img class="house" src="../../assets/house/sofa.jpg" />
                <button
                  type="button"
                  class="btn btn-success"
                  @click="changBabkground(5)"
                  v-if="havaVilla"
                >更換</button>
                <button type="button" class="btn btn-dark disabled" v-if="!havaVilla">未持有</button>
                <img class="house" src="../../assets/house/chairs.png" />
                <button
                  type="button"
                  class="btn btn-success"
                  @click="changBabkground(4)"
                  v-if="haveSkyscraper"
                >更換</button>
                <button type="button" class="btn btn-dark disabled" v-if="!haveSkyscraper">未持有</button>
              </div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          @click="sign()"
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
              <h5
                class="modal-title1"
                id="exampleModalCenterTitle"
                style="font-size:35px;color:white;"
              >每日簽到</h5>
              <div class="modal-body" style="font-size:30px;color:white;">
                <div class="h3">當前時間：</div>
                <h1>{{ nowDay }}</h1>
                <h1>{{ nowTime }}</h1>
                {{ text }}
              </div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
            <div class="modal-content" id="store">
              <h5 class="modal-title" id="exampleModalLabel">怪獸商店</h5>
              <div class="modal-body">
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >怪物住宅</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >怪物食品</a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="contianer-fuild">
                      <div class="img">
                        <div class="con">
                          <img src="../../assets/shop/house1.png" />
                          <br />
                          <span>
                            {{ woodName }}
                            <br />
                            ${{ wood }}
                          </span>
                          <br />
                          <button
                            type="button"
                            class="btn btn-info"
                            @click="buy(6)"
                            v-if="!haveCabin"
                          >購買</button>
                          <button type="button" class="btn btn-dark disabled" v-if="haveCabin">已擁有</button>
                          <br />
                          <img src="../../assets/shop/house2.png" />
                          <div>
                            <span>
                              {{ houseName }}
                              <br />
                              ${{ house }}
                            </span>
                            <br />
                            <button
                              type="button"
                              class="btn btn-info"
                              @click="buy(5)"
                              v-if="!havaVilla"
                            >購買</button>
                            <button type="button" class="btn btn-dark disabled" v-if="havaVilla">已擁有</button>
                          </div>
                        </div>
                        <img src="../../assets/shop/house3.png" />
                        <div>
                          <span>
                            {{ flatName }}
                            <br />
                            ${{ flat }}
                          </span>
                          <br />
                          <button
                            type="button"
                            class="btn btn-info"
                            @click="buy(4)"
                            v-if="!haveSkyscraper"
                          >購買</button>
                          <button
                            type="button"
                            class="btn btn-dark disabled"
                            v-if="haveSkyscraper"
                          >已擁有</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="contianer-fuild">
                      <div class="img">
                        <img src="../../assets/shop/food1.png" />
                        <div>
                          <span>
                            {{ food1name }}
                            <br />
                            ${{ food1 }}
                          </span>
                          <br />
                          <button type="button" class="btn btn-info" @click="buy(3)">購買</button>
                        </div>
                        <img src="../../assets/shop/food2.png" />
                        <div>
                          <span>
                            {{ food2name }}
                            <br />
                            ${{ food2 }}
                          </span>
                          <br />
                          <button type="button" class="btn btn-info" @click="buy(1)">購買</button>
                        </div>
                        <img src="../../assets/shop/food3.png" />
                        <div>
                          <span>
                            {{ food3name }}
                            <br />
                            ${{ food3 }}
                          </span>
                          <br />
                          <button type="button" class="btn btn-info" @click="buy(2)">購買</button>
                        </div>
                      </div>
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
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#exampleModalCenter2"
            @click="eatMar()"
            v-if="mar > 0"
          >餵食</button>
          <button type="button" class="btn btn-warning disabled" v-if="mar == 0">餵食</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenter2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="flex">
                  <h5 class="modal-title" id="exampleModalCenterTitle1">卡滋~卡滋~</h5>
                  <div class="modal-body">
                    <img src="@/assets/eat/eatAnimation01.gif" />
                  </div>

                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <img src="../../assets/shop/food2.png" />
          <p>草莓蛋糕</p>
          <p>持有數量: {{ cake }}</p>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#exampleModalCenter1"
            @click="eatCake()"
            v-if="cake > 0"
          >餵食</button>
          <button type="button" class="btn btn-warning disabled" v-if="cake == 0">餵食</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenter1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="flex">
                  <h5 class="modal-title" id="exampleModalCenterTitle1">卡滋~卡滋~</h5>
                  <div class="modal-body">
                    <img src="@/assets/eat/eatAnimation02.gif" />
                  </div>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <img src="../../assets/shop/food3.png" />
          <p>相撲火鍋</p>
          <p>持有數量: {{ hotpot }}</p>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#exampleModalCenter3"
            @click="eatHotPot()"
            v-if="hotpot > 0"
          >餵食</button>
          <button type="button" class="btn btn-warning disabled" v-if="hotpot == 0">餵食</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenter3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="flex">
                  <h5 class="modal-title" id="exampleModalCenterTitle1">卡滋~卡滋~</h5>
                  <div class="modal-body">
                    <img src="@/assets/eat/eatAnimation03.gif" />
                  </div>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
import api from "../../utils/api";
export default {
  data() {
    return {
      text: "簽到成功~",
      link: require("@/assets/gif/dino1.gif"),
      cash: 0,
      stock: 0,
      total: 0,
      mar: 0,
      woodName: "小木屋",
      cake: 0,
      houseName: "獨棟豪宅",
      hotpot: 0,
      flatName: "帝寶",
      wood: 8000,
      house: 80000,
      flat: 800000,
      food1: 100,
      food1name: "馬卡龍",
      food2: 500,
      food2name: "草莓蛋糕",
      food3: 1000,
      food3name: "相撲火鍋",
      nowDay: "",
      nowTime: "",
      url: require("@/assets/house/carpet.png"),
      haveCabin: false,
      havaVilla: false,
      haveSkyscraper: false
    };
  },
  update() {
    api
      .userfocusmonster()
      .then(res => {
        // console.log(res.data);
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
    changBabkground(val) {
      if (val == 4) {
        this.url = require("@/assets/house/chairs.png");
        api
          .focushouse({ houseId: "4" })
          .then(res => {
            // console.log(res.data);
          })
          .catch(function(error) {
            console.log("請求失敗", error);
          });
      } else if (val == 5) {
        this.url = require("@/assets/house/sofa.jpg");
        api
          .focushouse({ houseId: "5" })
          .then(res => {
            // console.log(res.data);
          })
          .catch(function(error) {
            console.log("請求失敗", error);
          });
      } else if (val == 6) {
        this.url = require("../../assets/house/house2.jpg");
        api
          .focushouse({ houseId: "6" })
          .then(res => {
            // console.log(res.data);
          })
          .catch(function(error) {
            console.log("請求失敗", error);
          });
      }
    },
    eatMar() {
      if (this.mar == 0) {
        return;
      }
      api
        .eatfood({ foodId: "3" })
        .then(res => {
          // console.log(res.data);
          if (this.mar > 0) {
            this.mar -= 1;
          }
          api
            .finishmission2()
            .then(res => {
              // console.log(res.data);
            })
            .catch(function(error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    eatCake() {
      if (this.cake == 0) {
        return;
      }
      api
        .eatfood({ foodId: "1" })
        .then(res => {
          // console.log(res.data);
          if (this.cake > 0) {
            this.cake -= 1;
          }
          api
            .finishmission2()
            .then(res => {
              // console.log(res.data);
            })
            .catch(function(error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    eatHotPot() {
      if (this.hotpot == 0) {
        return;
      }
      api
        .eatfood({ foodId: "2" })
        .then(res => {
          // console.log(res.data);
          if (this.hotpot > 0) {
            this.hotpot -= 1;
          }
          api
            .finishmission2()
            .then(res => {
              // console.log(res.data);
            })
            .catch(function(error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    buy(val) {
      api
        .userbuyweb({ id: val })
        .then(res => {
          // console.log(res.data);
          api
            .userhave()
            .then(res => {
              // console.log(res.data);
              for (let i = 0; i < res.data.message.length; i++) {
                if (res.data.message[i].store.id == 1) {
                  this.cake = res.data.message[i].number;
                } else if (res.data.message[i].store.id == 2) {
                  this.hotpot = res.data.message[i].number;
                } else if (res.data.message[i].store.id == 3) {
                  this.mar = res.data.message[i].number;
                } else if (res.data.message[i].store.id == 4) {
                  this.haveSkyscraper = true;
                } else if (res.data.message[i].store.id == 5) {
                  this.havaVilla = true;
                } else if (res.data.message[i].store.id == 6) {
                  this.haveCabin = true;
                }
              }
              api
                .getdata()
                .then(res => {
                  // console.log(res.data);
                  this.cash = res.data.message.cash;
                  this.stock = res.data.message.stock;
                  this.total = res.data.message.totalAsset;
                })
                .catch(function(error) {
                  console.log("請求失敗", error);
                });
            })
            .catch(function(error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    sign() {
      api
        .getsalaryweb()
        .then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            this.text = "簽到成功~";
            this.cash += 5500;
          } else if (res.data.status == 401) {
            this.text = "已簽到~";
          }
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    change1() {
      this.link = require("@/assets/gif/dino1.gif");
      api
        .changefocusmonster({ monsterId: "1" })
        .then(res => {
          // console.log(res.data);
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    change2() {
      this.link = require("@/assets/gif/cat1.gif");
      api
        .changefocusmonster({ monsterId: "2" })
        .then(res => {
          // console.log(res.data);
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    },
    change3() {
      this.link = require("@/assets/gif/fox1.gif");
      api
        .changefocusmonster({ monsterId: "3" })
        .then(res => {
          // console.log(res.data);
        })
        .catch(function(error) {
          console.log("請求失敗", error);
        });
    }, // 得到當下時間
    timeFormate(timeStamp) {
      let newdate = new Date(timeStamp);
      let week = ["日", "一", "二", "三", "四", "五", "六"];

      let year = newdate.getFullYear();
      let month =
        newdate.getMonth() + 1 < 10
          ? "0" + (newdate.getMonth() + 1)
          : newdate.getMonth() + 1;
      let date =
        newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
      let hh =
        newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
      let mm =
        newdate.getMinutes() < 10
          ? "0" + newdate.getMinutes()
          : newdate.getMinutes();
      let ss =
        newdate.getSeconds() < 10
          ? "0" + newdate.getSeconds()
          : newdate.getSeconds();

      this.nowTime = hh + ":" + mm + ":" + ss;
      this.nowDay = year + "年" + month + "月" + date + "日";
    },
    // 定時器函數
    nowTimes() {
      let self = this;
      self.timeFormate(new Date());
      setInterval(function() {
        self.timeFormate(new Date());
      }, 1000);
    }
  },
  created() {
    this.nowTimes();
  },
  mounted() {
    this.nowTimes();
    api
      .userfocusmonster()
      .then(res => {
        // console.log(res.data);
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
    api
      .userhave()
      .then(res => {
        // console.log(res.data);
        for (let i = 0; i < res.data.message.length; i++) {
          if (res.data.message[i].store.id == 1) {
            this.cake = res.data.message[i].number;
          } else if (res.data.message[i].store.id == 2) {
            this.hotpot = res.data.message[i].number;
          } else if (res.data.message[i].store.id == 3) {
            this.mar = res.data.message[i].number;
          } else if (res.data.message[i].store.id == 4) {
            this.haveSkyscraper = true;
          } else if (res.data.message[i].store.id == 5) {
            this.havaVilla = true;
          } else if (res.data.message[i].store.id == 6) {
            this.haveCabin = true;
          }
        }
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
    api
      .getdata()
      .then(res => {
        // console.log(res.data);
        let id = res.data.message.focusHouse;
        this.cash = res.data.message.cash;
        this.stock = res.data.message.stock;
        this.total = res.data.message.totalAsset;
        if (id == "帝寶") {
          this.url = require("@/assets/house/chairs.png");
        } else if (id == "獨棟豪宅") {
          this.url = require("@/assets/house/sofa.jpg");
        } else if (id == "小木屋") {
          this.url = require("../../assets/house/house2.jpg");
        }
      })
      .catch(function(error) {
        console.log("請求失敗", error);
      });
  }
};
</script>

<style src="./style.css" scoped></style>
