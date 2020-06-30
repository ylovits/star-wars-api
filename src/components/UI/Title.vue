<template>
  <span>{{ text }}</span>
</template>
<script>
import { apiGetTitle } from "@/utils/api";
import { mapActions, mapState } from "vuex";
export default {
  name: "Title",
  computed: {
    ...mapState(["loading"])
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(["setLoading"]),
    rendertitle() {
      apiGetTitle(this.url, res => {
        this.text = res;
      });
    }
  },
  mounted() {
    this.rendertitle();
  },
  props: {
    url: {
      type: String,
      default: null
    }
  }
};
</script>
