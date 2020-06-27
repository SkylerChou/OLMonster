<script>
export default {};
</script>
<template>
  <div>
    <ul class="nav justify-content-center nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >怪獸介紹</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="story-tab"
          data-toggle="tab"
          href="#story"
          role="tab"
          aria-controls="story"
          aria-selected="false"
          >怪物故事</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="appIntro-tab"
          data-toggle="tab"
          href="#appIntro"
          role="tab"
          aria-controls="appIntro"
          aria-selected="false"
          >APP介紹</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="login-tab"
          data-toggle="tab"
          href="#login"
          role="tab"
          aria-controls="login"
          aria-selected="false"
          >登入/註冊</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <ul>
          <h1 id="MonsterIntroduction">怪物介紹</h1>
          <li>
            <img src="../../assets/1.png" height="250px" />
            <h2>Q摸</h2>
            <h3>愛開玩笑的幸運星</h3>
            <p>
              Q摸是隻食量驚人超愛美食的大眼毛怪。<br />
              身高體大卻有雙7號半的小腳，走路時常跌倒。<br />
              下班超愛網購瞎拚買鞋，卻總找不到合腳的鞋，超苦惱。<br />
            </p>
            <p>
              Q摸有帶幸運給別人的特殊魔力，
              只要跟著他買彩卷、簽運彩、對發票......<br />
              都會有好運發生 (雖然自己都槓龜)，簡直福神在世。<br />
            </p>
          </li>
          <li>
            <img src="../../assets/2.png" height="250px" />
            <h2>Q呆</h2>
            <h3>天真樂觀的大胃王</h3>
            <p>
              Q摸從小的玩伴，是個天生的樂觀派，<br />
              雖然傻呆卻有顆真摯的心。<br />
              外表有點粗線條，聲音卻細小，常常被Q摸惡作劇跟使喚，<br />
              不管對他做什麼，他都很開心，夢想是跟大家交朋友。<br />
              非常有義氣，寧可當個傻蛋也不願拿變聰明取代友情。<br />
            </p>
          </li>
          <li>
            <img src="../../assets/3.png" height="250px" />
            <h2>奇樂</h2>
            <h3>喪失記憶的殺手</h3>
            <p>
              是隻神秘的怪獸， 因為從樹上掉下來敲到頭，失去了記憶。<br />
              傳聞之前是個殺手， 因為不能留下DNA生物證據，<br />
              所以對整潔特別吹毛求疵，很愛打掃 全套的清潔用品一應俱全，<br />
              最近更迷上了”怦然心動的人生整理魔法”<br />
              可能想透過整理找回記憶的蛛絲馬跡吧。<br />
            </p>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="story"
        role="tabpanel"
        aria-labelledby="story-tab"
      >
        456
      </div>
      <div
        class="tab-pane fade"
        id="appIntro"
        role="tabpanel"
        aria-labelledby="appIntro-tab"
      >
        <h1 id="APPIntroduction">APP介紹</h1>
        <h3>史上最萌的零股投資教學</h3>
        <img src="../../assets/qmon03.png" />
        <img src="../../assets/qmon04.png" />
      </div>
      <div
        class="tab-pane fade"
        id="login"
        role="tabpanel"
        aria-labelledby="login-tab"
      >
        147
      </div>
    </div>
  </div>
</template>
<style src="./style.css" scoped></style>
