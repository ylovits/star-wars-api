<template>
  <div class="typeahead">
    <div
      class="form-inline toggle align-items-center"
      ref="toggle"
      @mousedown.prevent="toggle"
    >
      <input
        type="text"
        class="search form-control mr-2 search-input"
        ref="search"
        placeholder="Type here..."
        v-model="search"
        @focus="onFocus"
        @blur="onBlur"
        @keydown.enter="onEnterKey"
        pattern="[A-Za-z0-9]+"
      />
      <span
        v-if="!this.open && displayText"
        v-bind:class="{ 'p-0': !displayText }"
        class="overtext position-absolute bg-white ml-2 d-flex align-items-center"
        ref="text"
        >{{ displayText }}</span
      >
      <button
        class="btn btn-primary"
        type="button"
        @click.prevent="doSearch"
        :disabled="(this.search === '' || null) && displayText === ''"
      >
        Search
      </button>
    </div>
    <ul
      class="position-absolute bg-light"
      ref="list"
      v-if="open && this.search.length > 0"
    >
      <li v-for="(option, index) in filteredOptions" :key="index">
        <a
          class="p-2 d-block"
          @mousedown.prevent="select(option)"
          v-if="search !== option.text"
        >
          {{ option.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import { mapActions } from "vuex";
export default {
  name: "Typeahead",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      open: false,
      selected: null,
      displayText: "",
      search: ""
    };
  },
  computed: {
    typeaheadState() {
      return this.open ? "typeahead typeahead__open" : "typeahead";
    },
    filteredOptions() {
      const exp = new RegExp(this.search, "i");
      return this.options.filter(option => {
        return exp.test(option.id) || exp.test(option.text);
      });
    }
  },
  methods: {
    ...mapActions(["getResults", "setSelectedList"]),
    doSearch() {
      if (
        this.search !== "" &&
        `/${this.$route.params.categ || this.$route.name}/${this.search}` !==
          this.$route.fullPath
      ) {
        this.$router.push(
          `/${this.$route.params.categ || this.$route.name}/${this.search}`
        );
        this.getResults({
          categ: this.$route.params.categ || this.$route.name,
          query: this.search
        });
      } else {
        this.$store.state.modalMessage =
          "You are already showing the results of this query. Please type something new...";
        this.$store.state.showModal = true;
      }
      this.$refs.search.blur();
    },
    onEnterKey() {
      this.doSearch();
    },
    select(option) {
      this.search = option.text;
      this.selected = option.text;
      this.$refs.search.value = option.text;
      this.doSearch();
    },
    toggle(e) {
      if (
        e.target === this.$refs.toggle ||
        e.target === this.$refs.search ||
        e.target === this.$refs.text
      ) {
        if (this.open) {
          if (e.target !== this.$refs.search && e.target !== this.$refs.text) {
            this.$refs.search.blur();
          }
        } else {
          this.$refs.search.focus();
        }
      }
    },
    onFocus() {
      this.setSelectedList(this.$route.params.categ || this.$route.name);
      this.open = true;
    },
    onBlur() {
      this.search = "";
      this.selected = null;
      this.open = false;
    }
  }
};
</script>
