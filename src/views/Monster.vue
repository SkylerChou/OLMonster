<template>
  <div class="container">
    <div>
      <Pet />
      <Navbar />
    </div>
  </div>
</template>
<script>
import Pet from "@/components/Pet/index.vue";
import Navbar from "@/components/Navbar/index.vue";
export default {
  name: "Home",
  components: {
    Pet,
    Navbar
  }
};
</script>

<style scoped>
</style>