import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import init from "./store/store";
import { routes } from "./routes";
import { apiSearch } from "@/utils/api";
import { SWAPI_TYPES } from "@/utils/constants";
import { active_api } from "@/utils/constants";
import "bootstrap";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

apiSearch(active_api.url, SWAPI_TYPES.PEOPLE, active_api.default, res => {
  new Vue(
    {
      el: "#app",
      router,
      store: init(res.data.results),
      created() {
        this.$store.dispatch("getLists");
        this.$store.dispatch("setSelectedCateg", "people");
        this.$store.dispatch("setSelectedList", "people");
      },
      render: h => h(App)
    },
    () => {
      this.$router.push("/NotFound");
    }
  );
});
