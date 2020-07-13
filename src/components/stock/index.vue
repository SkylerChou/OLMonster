<template>
  <div id="link">
    <div>
      <router-link to="/app/deal/allStock">股市</router-link>|
      <router-link to="/app/deal/myStock">持有股票</router-link>
    </div>
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="./style.css" scoped></style>
