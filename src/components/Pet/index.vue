<template>
  <div class="container-fluid">
    <div class="pet" id="pet" :style="{ backgroundImage: 'url(' + url + ')' }">
      <div class="container-fluid">
        <div class="talk">
          <span id="talk" v-if="show">{{ this.talks[idx1][idx2] }}</span>
        </div>
      </div>
      <img :src="link" @click="change()" />
    </div>
    <div id="info" @click="close()">
      <div>
        <span>
          等級: {{ level }}
          <br />
          經驗值: {{ exp }} 心情: {{ mood }}
          <br />
          現金: {{ cash }} 股票: {{ stock }}
          <br />
          總資產: {{ cash + stock }}
        </span>
        <br />
        <!-- Small modal -->
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target=".bd-example-modal-sm"
        >
          <img src="@/assets/change.png" width="30px" />
          <img src="@/assets/excited.png" width="30px" />
        </button>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModalCenter4"
        >
          <img src="@/assets/change.png" width="30px" />
          <img src="@/assets/home.png" width="30px" />
        </button>

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
          class="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          @click="sign()"
        >
          <img src="@/assets/clipboard.png" width="30px" />
          <img src="@/assets/pencil.png" width="30px" />
        </button>

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
                    <img :src="dino" />
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
                    <img :src="cat" />
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
                    <img :src="fox" />
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
    <div id="button-group" @click="close()">
      <div>
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target=".bd-example-modal-sm1"
          style="width:50px;"
        >
          <div class="column">
            <img src="@/assets/shop.png" width="40px" />SHOP
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
import Speak from "@/components/Speak/index.vue";
export default {
  components: {
    Speak,
  },
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
      url: require("@/assets/house/window2.jpg"),
      haveCabin: false,
      havaVilla: false,
      haveSkyscraper: false,
      level: 1,
      exp: 0,
      mood: 0,
      name: "",
      idx1: 0,
      idx2: 0,
      show: false,
      dino: require("@/assets/gif/dino1.gif"),
      cat: require("@/assets/gif/cat1.gif"),
      fox: require("@/assets/gif/fox1.gif"),
      talks: [
        [
          "投資不熟悉的產業或企業，勝算通常不高 －彼得林區",
          "投資的世界，情緒是敵人，理性才是我們的朋友",
          "要在別人貪婪的時候恐懼，在別人恐懼的時候貪婪 ",
          "省小錢靠記帳，賺大錢靠投資。",
          "沒有存不了錢的人，只有不會管錢的人。",
        ],

        [
          "想要賺錢，就要找別人不懂的，或做那些想法僵硬的人不肯做的事 ",
          "我喜歡簡單的東西 ",
          "目標，有可能是別人的；而夢想，絕對都是自己的。",
          "有錢能省直須省，莫待無錢餓肚子。",
          "追求資本大幅成長的投資人，應淡化股利的重要性 ",
          "投資不熟悉的產業或企業，勝算通常不高 ",
          "投資的世界，情緒是敵人，理性才是我們的朋友",
          "要在別人貪婪的時候恐懼，在別人恐懼的時候貪婪 ",
          "省小錢靠記帳，賺大錢靠投資。",
          "沒有存不了錢的人，只有不會管錢的人。",
        ],

        [
          "投資 不是賭博，而是一種不斷用來認識自己、了解社會運作的工具",
          "獲利只會跟未來的價格有關係，跟持有的成本沒有關係",
          "留財不留富，早晚財變負。",
          "花錢買享受，高興一下子；花錢買消災，心痛一陣子；花錢買資產，幸福一輩子。",
          "練習沒有休止符，個性可以不服輸，但操作要勇於認輸。不遵守紀律，市場會修理你。",
          "想要賺錢，就要找別人不懂的，或做那些想法僵硬的人不肯做的事 －彼得林區",
          "我喜歡簡單的東西 ",
          "目標，有可能是別人的；而夢想，絕對都是自己的。",
          "有錢能省直須省，莫待無錢餓肚子。",
          "追求資本大幅成長的投資人，應淡化股利的重要性 ",
          "投資不熟悉的產業或企業，勝算通常不高 ",
          "投資的世界，情緒是敵人，理性才是我們的朋友",
          "要在別人貪婪的時候恐懼，在別人恐懼的時候貪婪 ",
          "省小錢靠記帳，賺大錢靠投資。",
          "沒有存不了錢的人，只有不會管錢的人。",
        ],

        [
          "投資，不只是輸贏，而是一種培養深刻洞察力的訓練。",
          "節儉可以幫助我們渡過未來的難關以及多存一點錢投資",
          "投資，不是看結果，而是一種過程，一種 從恐懼無知 到怡然自得的過程。",
          "存錢，是為了走更遠的路。理財，是讓路變得好走。",
          "投資理財就像打高爾夫球，一桿進洞總是令人陶醉，不過最後的勝利者仍是那些用最少桿數，一桿又一桿穩定把球推進18個洞裡的人。",
          "股市要求堅定的信心，沒有信心者必將滅亡",
        ],

        [
          "只有退潮時，你才知道是誰在裸體游泳",
          "假如你是那種會在慌亂中拋售一切的人，你就該遠離股票市場",
          "投資，不是買賣，而是一種不斷把自己的洞見，推展到極致的方法。",
          "平時不理財，老年沒財理。",
          "存錢不存利，賺錢只好靠勞力。生財又生息，日後就能常休息。",
          "投資，不只是輸贏，而是一種培養深刻洞察力的訓練。",
          "節儉可以幫助我們渡過未來的難關以及多存一點錢投資",
          "投資，不是看結果，而是一種過程，一種 從恐懼無知 到怡然自得的過程。",
          "存錢，是為了走更遠的路。理財，是讓路變得好走。",
          "投資理財就像打高爾夫球，一桿進洞總是令人陶醉，不過最後的勝利者仍是那些用最少桿數，一桿又一桿穩定把球推進18個洞裡的人。",
          "股市要求堅定的信心，沒有信心者必將滅亡",
        ],

        [
          "不要隨群眾起舞 ",
          "越早開始理財越好。",
          "投資既有趣又刺激，但若不下苦功，就可能有危險 ",
          "賺錢要努力，花錢別用力，存錢需毅力，投資務必靠腦力。",
          "很多人會說，我沒有錢怎麼理財；其實這句話的意思是，我沒有存錢的習慣。",
          "只有退潮時，你才知道是誰在裸體游泳 ",
          "假如你是那種會在慌亂中拋售一切的人，你就該遠離股票市場 ",
          "投資，不是買賣，而是一種不斷把自己的洞見，推展到極致的方法。",
          "平時不理財，老年沒財理。",
          "存錢不存利，賺錢只好靠勞力。生財又生息，日後就能常休息。",
          "投資，不只是輸贏，而是一種培養深刻洞察力的訓練。",
          "節儉可以幫助我們渡過未來的難關以及多存一點錢投資",
          "投資，不是看結果，而是一種過程，一種 從恐懼無知 到怡然自得的過程。",
          "存錢，是為了走更遠的路。理財，是讓路變得好走。",
          "投資理財就像打高爾夫球，一桿進洞總是令人陶醉，不過最後的勝利者仍是那些用最少桿數，一桿又一桿穩定把球推進18個洞裡的人。",
          "股市要求堅定的信心，沒有信心者必將滅亡",
        ],

        [
          "擁有一隻股票，期待它明天早上晨就上漲是十分愚蠢的。 ",
          "你不會因為不屬於你的東西價格上漲而受害，你所擁有的東西才會毀了你。 ",
          "你不需要成為有錢人才能理財，但你需要理財才能成為有錢人。",
          "靠老闆加薪去理財，不如靠自己理財來加薪。",
          "金錢與時間都是人一生重要的資產。前者從無到有可以靠自己，趁早管理；後者從有到無只能看老天，好好珍惜！",
        ],

        [
          "學習，永遠要擺在賺錢的前面；先接受自己無知，然後才開始投資。",
          "理財是種計畫不是危機管理，要在錢進來之前就先管理它。",
          "理財就像慢跑，你可以規劃最佳路線，身穿最新的運動衣，腳踩最耐磨的鞋子，但只要沒有開始行動，就永遠不會通過終點。",
          "珍惜你的每一筆收入，因為那是實現夢想的重要工具。",
          "一個人會成功，是因不放棄做簡單的事。",
          "擁有一隻股票，期待它明天早上晨就上漲是十分愚蠢的。 ",
          "你不會因為不屬於你的東西價格上漲而受害，你所擁有的東西才會毀了你。 ",
          "你不需要成為有錢人才能理財，但你需要理財才能成為有錢人。",
          "靠老闆加薪去理財，不如靠自己理財來加薪。",
          "金錢與時間都是人一生重要的資產。前者從無到有可以靠自己，趁早管理；後者從有到無只能看老天，好好珍惜！",
        ],

        [
          "存股最難的並非能存多少，而是你會存多久，還有何時開始。",
          "現在先照顧好金錢，未來金錢就會照顧好你。",
          "幸福人生不是計較出來的，是計畫出來的。",
          "不要把你的現況跟未來畫上等號，只要努力，未來一定會比現在還好。",
          "不是行頭看起來很有錢，就代表戶頭也會很有錢。",
          "學習，永遠要擺在賺錢的前面；先接受自己無知，然後才開始投資。",
          "理財是種計畫不是危機管理，要在錢進來之前就先管理它。",
          "理財就像慢跑，你可以規劃最佳路線，身穿最新的運動衣，腳踩最耐磨的鞋子，但只要沒有開始行動，就永遠不會通過終點。",
          "珍惜你的每一筆收入，因為那是實現夢想的重要工具。",
          "一個人會成功，是因不放棄做簡單的事。",
          "擁有一隻股票，期待它明天早上晨就上漲是十分愚蠢的。",
          "你不會因為不屬於你的東西價格上漲而受害，你所擁有的東西才會毀了你。",
          "你不需要成為有錢人才能理財，但你需要理財才能成為有錢人。",
          "靠老闆加薪去理財，不如靠自己理財來加薪。",
          "金錢與時間都是人一生重要的資產。前者從無到有可以靠自己，趁早管理；後者從有到無只能看老天，好好珍惜！",
        ],
      ],
    };
  },
  update() {
    api
      .userfocusmonster()
      .then((res) => {
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
      .catch(function (error) {
        console.log("請求失敗", error);
      });
  },
  methods: {
    close() {
      this.show = false;
    },
    change() {
      this.show = true;
      let count = 0;
      if (this.name == "綠觸蛋") {
        this.idx1 = 0;
        this.idx2 = parseInt(Math.random() * 5);
      } else if (this.name == "花椰菜") {
        this.idx1 = 1;
        this.idx2 = parseInt(Math.random() * 10);
      } else if (this.name == "三株花椰龍") {
        this.idx1 = 2;
        this.idx2 = parseInt(Math.random() * 15);
      } else if (this.name == "橘草蛋") {
        this.idx1 = 3;
        this.idx2 = parseInt(Math.random() * 5);
      } else if (this.name == "函吉") {
        this.idx1 = 4;
        this.idx2 = parseInt(Math.random() * 10);
      } else if (this.name == "巨橘袋鼠") {
        this.idx1 = 5;
        this.idx2 = parseInt(Math.random() * 15);
      } else if (this.name == "嗨啾方蛋") {
        this.idx1 = 6;
        this.idx2 = parseInt(Math.random() * 5);
      } else if (this.name == "嗨揪") {
        this.idx1 = 7;
        this.idx2 = parseInt(Math.random() * 10);
      } else if (this.name == "長頸貓") {
        this.idx1 = 8;
        this.idx2 = parseInt(Math.random() * 15);
      }
    },
    changBabkground(val) {
      if (val == 4) {
        this.url = require("@/assets/house/chairs.png");
        api
          .focushouse({ houseId: "4" })
          .then((res) => {
            // console.log(res.data);
          })
          .catch(function (error) {
            console.log("請求失敗", error);
          });
      } else if (val == 5) {
        this.url = require("@/assets/house/sofa.jpg");
        api
          .focushouse({ houseId: "5" })
          .then((res) => {
            // console.log(res.data);
          })
          .catch(function (error) {
            console.log("請求失敗", error);
          });
      } else if (val == 6) {
        this.url = require("../../assets/house/house2.jpg");
        api
          .focushouse({ houseId: "6" })
          .then((res) => {
            // console.log(res.data);
          })
          .catch(function (error) {
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
        .then((res) => {
          console.log(res.data);
          if (this.mar > 0) {
            this.mar -= 1;
            this.exp += 10;
          }
          api
            .finishmission2()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    eatCake() {
      if (this.cake == 0) {
        return;
      }
      api
        .eatfood({ foodId: "1" })
        .then((res) => {
          // console.log(res.data);
          if (this.cake > 0) {
            this.cake -= 1;
            this.exp += 50;
          }
          api
            .finishmission2()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    eatHotPot() {
      if (this.hotpot == 0) {
        return;
      }
      api
        .eatfood({ foodId: "2" })
        .then((res) => {
          // console.log(res.data);
          if (this.hotpot > 0) {
            this.hotpot -= 1;
          }
          api
            .finishmission2()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    buy(val) {
      if (confirm("是否要購買?")) {
        api
          .userbuyweb({ id: val })
          .then((res) => {
            // console.log(res.data);
            for (let i = 0; i < res.data.message.length; i++) {
              if (res.data.message[i].store.id == 1 && this.cash < 100) {
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
              .userhave()
              .then((res) => {
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
                  .then((res) => {
                    // console.log(res.data);
                    this.cash = res.data.message.cash;
                    this.$store.commit("setAsset");
                    this.stock = res.data.message.stock;
                    this.total = res.data.message.totalAsset;
                  })
                  .catch(function (error) {
                    console.log("請求失敗", error);
                  });
              })
              .catch(function (error) {
                console.log("請求失敗", error);
              });
          })
          .catch(function (error) {
            console.log("請求失敗", error);
          });
      }
    },
    sign() {
      api
        .getsalaryweb()
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            this.text = "簽到成功~領薪水嚕~";
            this.cash += 5500;
          } else if (res.data.status == 401) {
            this.text = "已簽到~已領薪水~";
          }
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    change1() {
      this.link = require("@/assets/gif/dino1.gif");
      api
        .changefocusmonster({ monsterId: "1" })
        .then((res) => {
          // console.log(res.data);
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    change2() {
      this.link = require("@/assets/gif/cat1.gif");
      api
        .changefocusmonster({ monsterId: "2" })
        .then((res) => {
          // console.log(res.data);
        })
        .catch(function (error) {
          console.log("請求失敗", error);
        });
    },
    change3() {
      this.link = require("@/assets/gif/fox1.gif");
      api
        .changefocusmonster({ monsterId: "3" })
        .then((res) => {
          // console.log(res.data);
        })
        .catch(function (error) {
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
      setInterval(function () {
        self.timeFormate(new Date());
      }, 1000);
    },
  },
  created() {
    this.nowTimes();
  },
  mounted() {
    this.$store.commit("setAsset");
    this.nowTimes();
    api
      .userfocusmonster()
      .then((res) => {
        this.level = res.data.message.level;
        this.exp = res.data.message.exp;
        this.mood = res.data.message.mood;
        // console.log(res.data);
        if (res.data.message.monster.id == 1) {
          this.link = require("@/assets/gif/dino1.gif");
        } else if (res.data.message.monster.id == 2) {
          this.link = require("@/assets/gif/cat1.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 3) {
          this.link = require("@/assets/gif/fox1.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 4) {
          this.link = require("@/assets/gif/dino2.gif");
          this.dino = require("@/assets/gif/dino2.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 5) {
          this.link = require("@/assets/gif/cat2.gif");
          this.cat = require("@/assets/gif/cat2.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 6) {
          this.link = require("@/assets/gif/fox2.gif");
          this.fox = require("@/assets/gif/fox2.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 7) {
          this.link = require("@/assets/gif/dino3.gif");
          this.dino = require("@/assets/gif/dino3.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 8) {
          this.link = require("@/assets/gif/cat3.gif");
          this.cat = require("@/assets/gif/cat3.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        } else if (res.data.message.monster.id == 9) {
          this.link = require("@/assets/gif/fox3.gif");
          this.cat = require("@/assets/gif/fox3.gif");
          api
            .getuserallmonsterdata()
            .then((res) => {
              // console.log(res.data);
            })
            .catch(function (error) {
              console.log("請求失敗", error);
            });
        }
        this.name = res.data.message.monster.name;
        if (this.name == "綠觸蛋") {
          this.idx1 = 0;
          this.idx2 = parseInt(Math.random() * 5);
        } else if (this.name == "花椰菜") {
          this.idx1 = 1;
          this.idx2 = parseInt(Math.random() * 10);
        } else if (this.name == "三株花椰龍") {
          this.idx1 = 2;
          this.idx2 = parseInt(Math.random() * 15);
        } else if (this.name == "橘草蛋") {
          this.idx1 = 3;
          this.idx2 = parseInt(Math.random() * 5);
        } else if (this.name == "函吉") {
          this.idx1 = 4;
          this.idx2 = parseInt(Math.random() * 10);
        } else if (this.name == "巨橘袋鼠") {
          this.idx1 = 5;
          this.idx2 = parseInt(Math.random() * 15);
        } else if (this.name == "嗨啾方蛋") {
          this.idx1 = 6;
          this.idx2 = parseInt(Math.random() * 5);
        } else if (this.name == "嗨揪") {
          this.idx1 = 7;
          this.idx2 = parseInt(Math.random() * 10);
        } else if (this.name == "長頸貓") {
          this.idx1 = 8;
          this.idx2 = parseInt(Math.random() * 15);
        }
      })
      .catch(function (error) {
        console.log("請求失敗", error);
      });
    api
      .userhave()
      .then((res) => {
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
      .catch(function (error) {
        console.log("請求失敗", error);
      });
    api
      .getdata()
      .then((res) => {
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
      .catch(function (error) {
        console.log("請求失敗", error);
      });
  },
};
</script>

<style src="./style.css" scoped></style>
