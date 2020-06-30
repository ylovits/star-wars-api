<template>
  <nav class="navbar navbar-light justify-content-between p-4">
    <div class="col-lg-7 p-0">
      <span class="navbar-brand d-flex align-items-center m-0">
        <router-link to="/">
          <img :src="`../../${active_api.logo}`" alt="logo" class="logo" />
        </router-link>
        <span class="h2 ml-4">{{ active_api.name }} Challenge</span>
      </span>
    </div>
    <Search />
    <Modal v-if="this.$store.state.showModal" />
  </nav>
</template>

<script>
import Modal from "@/components/Utilities/Modal";
import Search from "@/components/UI/Search";
import { active_api } from "@/utils/constants";
export default {
  name: "Header",
  data: () => ({
    active_api: active_api
  }),
  components: {
    Modal,
    Search
  }
};
</script>
