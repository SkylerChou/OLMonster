<template>
  <div>
    <Navs />
  </div>
</template>

<script>
import Navs from "@/components/Navs/index.vue";
import cookie from "../utils/cookie";
export default {
  name: "Home",
  components: {
    Navs
  },
  data() {
    return {
      token: cookie.get("token")
    };
  },
  mounted() {
    if (this.token) {
      this.$router.push({ path: "/app/pet" });
    }
  }
};
</script>
