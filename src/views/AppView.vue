<template>
  <div><Chart /> <Calculator /></div>
</template>
<script>
import Chart from "@/components/Chart/index.vue";
import Calculator from "@/components/Calculator/index.vue";
export default {
  name: "Home",
  components: {
    Chart,
    Calculator,
  },
};
</script>
