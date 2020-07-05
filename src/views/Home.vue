<template>
  <!-- <div class="home"> -->
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <!-- </div> -->
  <div>
    <Navs />
  </div>
</template>

<script>
// @ is an alias to /src
import Navs from "@/components/Navs/index.vue";

export default {
  name: "Home",
  components: {
    Navs
  }
};
</script>
