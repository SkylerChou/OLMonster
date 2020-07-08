<template>
  <div class="flex">
    <div class="pet">
      <img src="../../assets/gif/dino2.gif" />
    </div>
    <div id="info">
      <div>
        <span>
          現金: {{cash}}
          股票: {{stock}}
          總資產: {{cash+stock}}
        </span>
        <button type="button" class="btn btn-danger">切換怪獸</button>
      </div>
    </div>
    <div id="button-group">
      <div>
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >商店</button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">怪獸商店</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="contianer">
                  <div class="img">
                    <h2>怪物住宅</h2>
                    <div class="con">
                      <img src="../../assets/shop/house1.png" />
                      <br />
                      <span>
                        小木屋
                        <br />$8000
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                      <br />
                      <img src="../../assets/shop/house2.png" />
                      <div>
                        <span>
                          獨棟豪宅
                          <br />$80000
                        </span>
                        <br />
                        <button type="button" class="btn btn-info">購買</button>
                      </div>
                    </div>
                    <img src="../../assets/shop/house3.png" />
                    <div>
                      <span>
                        帝寶
                        <br />$800000
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <h2>怪物食品</h2>
                    <img src="../../assets/shop/food1.png" />
                    <div>
                      <span>
                        馬卡龍
                        <br />$100
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <img src="../../assets/shop/food2.png" />
                    <div>
                      <span>
                        草莓蛋糕
                        <br />$500
                      </span>
                      <br />
                      <button type="button" class="btn btn-info">購買</button>
                    </div>
                    <img src="../../assets/shop/food3.png" />
                    <div>
                      <span>
                        相撲火鍋
                        <br />$1000
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
          <p>持有數量: 0</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
        <div class="food">
          <img src="../../assets/shop/food2.png" />
          <p>草莓蛋糕</p>
          <p>持有數量: 0</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
        <div class="food">
          <img src="../../assets/shop/food3.png" />
          <p>相撲火鍋</p>
          <p>持有數量: 0</p>
          <button type="button" class="btn btn-warning">餵食</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cash: 300000,
      stock: 300000
    };
  }
};
</script>

<style src="./style.css" scoped>
</style>