<template>
  <div class="p-4 main-content">
    <div
      class="d-flex row main-content-inner p-4 rounded bg-white mb-4"
      v-for="result in stateResults"
      v-bind:key="result.id"
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
  </div>
</template>
<script>
import Title from "@/components/UI/Title";
import { mapState } from "vuex";
export default {
  name: "Films",
  computed: {
    ...mapState({ stateResults: "results" })
  },
  components: {
    Title
  }
};
</script>
