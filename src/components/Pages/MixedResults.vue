<template>
  <div class="p-4 main-content">
    <span v-for="result in stateResults" v-bind:key="result.url">
      <div
        class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
        v-if="result.url.indexOf(SWAPI_TYPES.PEOPLE) !== -1"
      >
        <div class="col-md-6 p-4">
          <h4 class="font-weight-bold mb-4">{{ result.name }}</h4>
          <span>Homeworld:</span>
          <ul class="p-0 m-0 d-inline-block ml-2">
            <li>
              <Title :url="result.homeworld" />
            </li>
          </ul>
        </div>
        <div class="col-md-6 p-4">
          <div v-if="result.films" class="films mb-4 pb-4">
            <h4 class="font-weight-bold mb-4">Films</h4>
            <ul class="p-0">
              <li v-for="film in result.films" v-bind:key="film">
                <Title :url="film" />
              </li>
            </ul>
          </div>
          <div v-if="result.starships" class="starships">
            <h4 class="font-weight-bold mb-4">Starships</h4>
            <ul class="p-0" v-if="result.starships[0]">
              <li v-for="starship in result.starships" v-bind:key="starship">
                <Title :url="starship" />
              </li>
            </ul>
            <ul v-else class="p-0">
              <li>None</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
        v-else-if="result.url.indexOf(SWAPI_TYPES.PLANETS) !== -1"
      >
        <div class="col-md-6 p-4">
          <h4 class="font-weight-bold mb-4">{{ result.name }}</h4>
          <span>Population:</span>
          <ul class="p-0 m-0 d-inline-block ml-2">
            <li>{{ result.population }}</li>
          </ul>
        </div>
        <div class="col-md-6 p-4">
          <div v-if="result.films" class="films mb-4 pb-4">
            <h4 class="font-weight-bold mb-4">Films</h4>
            <ul class="p-0">
              <li v-for="film in result.films" v-bind:key="film">
                <Title :url="film" />
              </li>
            </ul>
          </div>
          <div v-if="result.residents" class="residents">
            <h4 class="font-weight-bold mb-4">Known Residents</h4>
            <ul v-if="result.residents[0]" class="p-0">
              <li v-for="resident in result.residents" v-bind:key="resident">
                <Title :url="resident" />
              </li>
            </ul>
            <ul v-else class="p-0">
              <li>None</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
        v-else-if="result.url.indexOf(SWAPI_TYPES.FILMS) !== -1"
      >
        <div class="col-md-6 p-4">
          <h4 class="font-weight-bold mb-4">{{ result.title }}</h4>
          <span>Episode:</span>
          <ul class="p-0 m-0 d-inline-block ml-2">
            <li>{{ result.episode_id }}</li>
          </ul>
        </div>
        <div class="col-md-6 p-4">
          <div v-if="result.planets" class="planets mb-4 pb-4">
            <h4 class="font-weight-bold mb-4">Planets</h4>
            <ul class="p-0">
              <li v-for="planet in result.planets" v-bind:key="planet">
                <Title :url="planet" />
              </li>
            </ul>
          </div>
          <div v-if="result.starships" class="starships">
            <h4 class="font-weight-bold mb-4">Starships</h4>
            <ul class="p-0">
              <li v-for="starship in result.starships" v-bind:key="starship">
                <Title :url="starship" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
        v-else-if="result.url.indexOf(SWAPI_TYPES.STARSHIPS) !== -1"
      >
        <div class="col-md-6 p-4">
          <h4 class="font-weight-bold mb-4">{{ result.name }}</h4>
          <span>Manufacturer:</span>
          <ul class="p-0 m-0 d-inline-block ml-2">
            <li>{{ result.name }}</li>
          </ul>
        </div>
        <div class="col-md-6 p-4">
          <div v-if="result.films" class="films mb-4 pb-4">
            <h4 class="font-weight-bold mb-4">Films</h4>
            <ul class="p-0">
              <li v-for="film in result.films" v-bind:key="film">
                <Title :url="film" />
              </li>
            </ul>
          </div>
          <div v-if="result.starship_class" class="starship_class">
            <h4 class="font-weight-bold mb-4">Starship Class</h4>
            <ul class="p-0">
              <li>{{ result.starship_class }}</li>
            </ul>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>
<script>
import Title from "@/components/UI/Title";
import { mapState } from "vuex";
import { SWAPI_TYPES } from "@/utils/constants";
export default {
  name: "MixedResults",
  computed: {
    ...mapState({ stateResults: "results" })
  },
  components: {
    Title
  },
  data: () => ({
    SWAPI_TYPES: SWAPI_TYPES
  })
};
</script>
