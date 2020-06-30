<template>
  <div class="col-lg-5 p-0">
    <div class="form-inline search">
      <Typeahead
        v-if="SEARCH_CATEGORIES.indexOf(this.$route.params.categ) !== -1"
        :options="taList"
      ></Typeahead>
      <Typeahead
        v-else-if="this.$route.params.categ === SWAPI_TYPES.ALL"
        :options="allList"
      ></Typeahead>
    </div>
    <div class="search-type">
      <div class="label font-weight-bold">Search for:</div>
      <div class="d-flex flex-wrap">
        <router-link
          tag="span"
          :to="`/${SWAPI_TYPES.PEOPLE}`"
          class="d-flex align-items-center mr-2 position-relative"
        >
          <input
            type="radio"
            :id="`${SWAPI_TYPES.PEOPLE}`"
            name="search-type"
            :value="`${SWAPI_TYPES.PEOPLE}`"
            :checked="currentRouteName === SWAPI_TYPES.PEOPLE"
            class="position-absolute zi-1"
          />
          <label
            v-on:click="hanldleSelection(SWAPI_TYPES.PEOPLE)"
            class="m-0 pl-3"
            :for="`${SWAPI_TYPES.PEOPLE}`"
            >{{ SWAPI_TYPES.PEOPLE }}</label
          >
        </router-link>

        <router-link
          tag="span"
          :to="`/${SWAPI_TYPES.PLANETS}`"
          class="d-flex align-items-center mr-2 position-relative"
        >
          <input
            type="radio"
            :id="`${SWAPI_TYPES.PLANETS}`"
            name="search-type"
            :value="`${SWAPI_TYPES.PLANETS}`"
            :checked="currentRouteName === SWAPI_TYPES.PLANETS"
            class="position-absolute zi-1"
          />
          <label
            v-on:click="hanldleSelection(SWAPI_TYPES.PLANETS)"
            class="m-0 pl-3"
            :for="`${SWAPI_TYPES.PLANETS}`"
            >{{ SWAPI_TYPES.PLANETS }}</label
          >
        </router-link>

        <router-link
          tag="span"
          :to="`/${SWAPI_TYPES.STARSHIPS}`"
          class="d-flex align-items-center mr-2 position-relative"
        >
          <input
            type="radio"
            :id="`${SWAPI_TYPES.STARSHIPS}`"
            name="search-type"
            :value="`${SWAPI_TYPES.STARSHIPS}`"
            :checked="currentRouteName === SWAPI_TYPES.STARSHIPS"
            class="position-absolute zi-1"
          />
          <label
            v-on:click="hanldleSelection(SWAPI_TYPES.STARSHIPS)"
            class="m-0 pl-3"
            :for="`${SWAPI_TYPES.STARSHIPS}`"
            >{{ SWAPI_TYPES.STARSHIPS }}</label
          >
        </router-link>

        <router-link
          tag="span"
          :to="`/${SWAPI_TYPES.FILMS}`"
          class="d-flex align-items-center mr-2 position-relative"
        >
          <input
            type="radio"
            :id="`${SWAPI_TYPES.FILMS}`"
            name="search-type"
            :value="`${SWAPI_TYPES.FILMS}`"
            :checked="currentRouteName === SWAPI_TYPES.FILMS"
            class="position-absolute zi-1"
          />
          <label
            v-on:click="hanldleSelection(SWAPI_TYPES.FILMS)"
            class="m-0 pl-3"
            :for="`${SWAPI_TYPES.FILMS}`"
            >{{ SWAPI_TYPES.FILMS }}</label
          >
        </router-link>
        <router-link
          tag="span"
          :to="`/${SWAPI_TYPES.ALL}`"
          class="d-flex align-items-center mr-2 position-relative"
        >
          <input
            type="radio"
            :id="`${SWAPI_TYPES.ALL}`"
            name="search-type"
            :value="`${SWAPI_TYPES.ALL}`"
            :checked="currentRouteName === SWAPI_TYPES.ALL"
            class="position-absolute zi-1"
          />
          <label
            v-on:click="hanldleSelection(SWAPI_TYPES.ALL)"
            class="m-0 pl-3"
            :for="`${SWAPI_TYPES.ALL}`"
            >{{ SWAPI_TYPES.ALL }}</label
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { SWAPI_TYPES, SEARCH_CATEGORIES } from "@/utils/constants";
import { mapActions, mapState } from "vuex";
import Typeahead from "@/components/UI/Typeahead";
export default {
  name: "Search",
  computed: {
    ...mapState({ taList: "selectedList", allList: "allList" }),
    currentRouteName() {
      if (typeof this.$route.name === "string") {
        return this.$route.name !== "index"
          ? this.$route.params.categ || this.$route.name
          : null;
      } else {
        return this.$route.params.categ || null;
      }
    }
  },
  methods: {
    ...mapActions(["setSelectedCateg", "setSelectedList"]),
    hanldleSelection(categ) {
      this.setSelectedCateg(categ);
      this.setSelectedList(categ);
    }
  },
  data: () => ({
    input: "",
    SWAPI_TYPES: SWAPI_TYPES,
    SEARCH_CATEGORIES: SEARCH_CATEGORIES
  }),
  components: {
    Typeahead
  }
};
</script>
