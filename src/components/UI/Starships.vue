<template>
  <div class="p-4 main-content">
    <div
      class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
      v-for="result in stateResults"
      v-bind:key="result.id"
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
  </div>
</template>
<script>
import Title from "@/components/UI/Title";
import { mapState } from "vuex";
export default {
  name: "Starships",
  computed: {
    ...mapState({ stateResults: "results" })
  },
  components: {
    Title
  }
};
</script>
