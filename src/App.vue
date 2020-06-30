<style lang="scss">
@import "@/styles/overrides.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "@/styles/styles.scss";
</style>

<template>
  <div class="container p-0">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>
