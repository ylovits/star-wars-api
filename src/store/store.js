import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

function init(results) {
  return new Vuex.Store({
    state: {
      results,
      showModal: false,
      modalMessage: "",
      loading: false,
      selectedCateg: "",
      taLists: {
        people: [],
        starships: [],
        planets: [],
        films: []
      },
      selectedList: [],
      allList: []
    },
    actions,
    mutations
  });
}

export default init;
