import { apiSearch, apiGetList } from "@/utils/api";
import { VUEX, active_api, SEARCH_CATEGORIES } from "@/utils/constants.js";

const actions = {
  getLists({ commit }) {
    commit(VUEX.SET_LOADING, true);
    let allList = [];
    let iterated = 0;
    SEARCH_CATEGORIES.forEach((category, index, array) => {
      new Promise((resolve, reject) => {
        apiGetList(`${active_api.url}${category}`, [], resolve, reject);
      }).then(res => {
        iterated++;
        commit(VUEX.UPDATE_TA_LIST, { resp: res, catego: category });
        res.forEach(item => {
          allList.push(item);
        });
        if (iterated === array.length) {
          commit(VUEX.UPDATE_TA_ALL_LIST, allList);
          commit(VUEX.SET_LOADING, false);
        }
      });
    });
  },
  setSelectedList({ commit }, selectedList) {
    commit(VUEX.SET_SELECTED_LIST, selectedList);
  },
  getResults({ commit }, payload) {
    commit(VUEX.SET_LOADING, true);
    if (payload.categ === "ALL") {
      let allResults = [];
      let iterated = 0;
      SEARCH_CATEGORIES.forEach((category, index, array) => {
        return apiSearch(
          active_api.url,
          category,
          payload.query,
          res => {
            iterated++;
            res.data.results.forEach(item => {
              allResults.push(item);
            });
            if (iterated === array.length) {
              commit(VUEX.UPDATE_RESULTS, allResults);
              if (allResults.length === 0) {
                commit(
                  VUEX.SET_MODAL_MESSAGE,
                  "Sorry. No results for this search! Try searching something else..."
                );
                commit(VUEX.SET_SHOW_MODAL, true);
              }
              commit(VUEX.SET_LOADING, false);
            }
          },
          err => {
            /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
            console.error("Could not get results:", err);
          }
        );
      });
    } else {
      return apiSearch(
        active_api.url,
        payload.categ,
        payload.query,
        res => {
          commit(VUEX.UPDATE_RESULTS, res.data.results);
          if (res.data.results.length === 0) {
            commit(
              VUEX.SET_MODAL_MESSAGE,
              "Sorry. No results for this search! Try searching something else..."
            );
            commit(VUEX.SET_SHOW_MODAL, true);
          }
          commit(VUEX.SET_LOADING, false);
        },
        err => {
          /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
          console.error("Could not get results:", err);
        }
      );
    }
  },
  setSelectedCateg({ commit }, selectedCateg) {
    commit(VUEX.SET_SELECTED_CATEG, selectedCateg);
  },
  setLoading({ commit }, bool) {
    commit(VUEX.SET_LOADING, bool);
  },
  setShowModal({ commit }, bool) {
    commit(VUEX.SET_SHOW_MODAL, bool);
  },
  setModalMessage({ commit }, msg) {
    commit(VUEX.SET_MODAL_MESSAGE, msg);
  }
};
export default actions;
