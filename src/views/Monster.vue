<template>
  <div class="container">
    <div>
      <Pet />
    </div>
  </div>
</template>
<script>
import Pet from "@/components/Pet/index.vue";
export default {
  name: "Home",
  components: {
    Pet
  }
};
</script>

<style scoped>
</style>