import { VUEX } from "@/utils/constants.js";
const mutations = {
  [VUEX.UPDATE_RESULTS](state, results) {
    state.results = results;
  },
  [VUEX.UPDATE_TA_LIST](state, taList) {
    state.taLists[taList.catego] = taList.resp;
  },
  [VUEX.UPDATE_TA_ALL_LIST](state, allList) {
    state.allList = allList;
  },
  [VUEX.SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [VUEX.SET_MODAL_MESSAGE](state, modalMessage) {
    state.modalMessage = modalMessage;
  },
  [VUEX.SET_SHOW_MODAL](state, showModal) {
    state.showModal = showModal;
  },
  [VUEX.SET_SELECTED_CATEG](state, selectedCateg) {
    state.selectedCateg = selectedCateg;
  },
  [VUEX.SET_SELECTED_LIST](state, selectedList) {
    state.selectedList = state.taLists[selectedList];
  }
};
export default mutations;
