export const SWAPI = {
  url: "https://swapi.dev/api/",
  name: "Star Wars API",
  logo: "death-star.png",
  default: "Luke Skywalker"
};

export const SWAPI_TYPES = {
  PEOPLE: "people",
  FILMS: "films",
  PLANETS: "planets",
  STARSHIPS: "starships",
  ALL: "ALL"
};

export const VUEX = {
  UPDATE_RESULTS: "UPDATE_RESULTS",
    UPDATE_TA_LIST: "UPDATE_TA_LIST",
  UPDATE_TA_ALL_LIST: "UPDATE_TA_ALL_LIST",
  SET_LOADING: "SET_LOADING",
  SET_SELECTED_CATEG: "SET_SELECTED_CATEG",
  SET_SELECTED_LIST: "SET_SELECTED_LIST",
  SET_SHOW_MODAL: "SET_SHOW_MODAL",
  SET_MODAL_MESSAGE: "SET_MODAL_MESSAGE"
};

export const SEARCH_CATEGORIES = ["people", "planets", "films", "starships"];
export const active_api = SWAPI;
