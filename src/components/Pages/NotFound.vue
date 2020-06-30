<template>
  <div class="p-4 main-content">
    <div
      class="page404 d-flex justify-content-center align-items-center flex-column row main-content-inner p-4 rounded bg-white"
    >
      <h1>Page Not Found!</h1>
      <h3>
        Click
        <router-link to="/" class="mr-2">
          <button type="button" class="btn btn-primary">
            HERE
          </button> </router-link
        >to get back to the homepage
      </h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NotFound",
  methods: {
    ...mapActions(["setSelectedCateg", "setSelectedList"])
  },
  mounted() {
    this.setSelectedCateg("people");
    this.setSelectedList("people");
  }
};
</script>
