<template>
  <v-text-field
      label="Search for something?"
      v-model="filter"
  ></v-text-field>
</template>

<script>
export default {
  name: 'Search',

  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit('setFilter', value);
      }
    }
  },
}
</script>
