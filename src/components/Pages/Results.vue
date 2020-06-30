<template>
  <Spinner v-if="loading" />
  <NotFound
    v-else-if="
      !(
        [SWAPI_TYPES.ALL, ...SEARCH_CATEGORIES].indexOf(this.routeCateg()) !==
        -1
      )
    "
  />
  <People
    v-else-if="
      this.routeQuery() &&
        this.routeCateg() === SWAPI_TYPES.PEOPLE &&
        this.results.length > 0
    "
  />
  <Planets
    v-else-if="
      this.routeQuery() &&
        this.routeCateg() === SWAPI_TYPES.PLANETS &&
        this.results.length > 0
    "
  />
  <Films
    v-else-if="
      this.routeQuery() &&
        this.routeCateg() === SWAPI_TYPES.FILMS &&
        this.results.length > 0
    "
  />
  <Starships
    v-else-if="
      this.routeQuery() &&
        this.routeCateg() === SWAPI_TYPES.STARSHIPS &&
        this.results.length > 0
    "
  />
  <MixedResults
    v-else-if="
      this.routeQuery() &&
        this.routeCateg() === SWAPI_TYPES.ALL &&
        this.results.length > 0
    "
  />

  <div v-else-if="this.$route.params.categ" class="p-4 main-content">
    <div
      class="d-flex justify-content-center align-items-center flex-column row main-content-inner p-4 rounded bg-white"
    >
      <h2>
        Search the Star Wars Universe for
        <span v-if="this.$route.params.categ === SWAPI_TYPES.ALL"
          >anything</span
        >
        <span v-else>{{ this.$route.params.categ }}</span>
      </h2>
    </div>
  </div>

  <NotFound v-else />
</template>

<script>
import Films from "@/components/UI/Films";
import People from "@/components/UI/People";
import Starships from "@/components/UI/Starships";
import Planets from "@/components/UI/Planets";
import MixedResults from "@/components/Pages/MixedResults";
import Spinner from "@/components/Utilities/Spinner";
import { SWAPI_TYPES, SEARCH_CATEGORIES } from "@/utils/constants";
import NotFound from "@/components/Pages/NotFound";
import Vuex from "vuex";
const mapState = Vuex.mapState;
const mapActions = Vuex.mapActions;
export default {
  name: "Results",
  computed: {
    ...mapState(["loading", "results"])
  },
  methods: {
    ...mapActions(["getResults"]),
    routeCateg() {
      return this.$route.params.categ;
    },
    routeQuery() {
      return this.$route.params.query;
    }
  },
  mounted() {
    if (
      [SWAPI_TYPES.ALL, ...SEARCH_CATEGORIES].indexOf(this.routeCateg()) !==
        -1 &&
      this.routeQuery()
    ) {
      this.getResults({
        categ: this.routeCateg() || "people",
        query: this.routeQuery() || "Luke Skywalker"
      });
    }
  },
  components: {
    NotFound,
    Spinner,
    Planets,
    People,
    Starships,
    Films,
    MixedResults
  },
  data: () => ({
    SWAPI_TYPES: SWAPI_TYPES,
    SEARCH_CATEGORIES: SEARCH_CATEGORIES
  })
};
</script>
