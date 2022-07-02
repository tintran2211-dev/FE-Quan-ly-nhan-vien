<template>
  <div class="layout-main">
    <TheNavbarVue />
    <div class="main-content">
      <TheHeaderVue />
      <TheContentVue />
    </div>
  </div>
</template>

<script>
import TheNavbarVue from "./components/layout/TheNavbar.vue";
import TheHeaderVue from "./components/layout/TheHeader.vue";
import TheContentVue from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheNavbarVue,
    TheHeaderVue,
    TheContentVue,
  },
};
</script>

<style scoped>
@import url(./css/style.css);
</style>
