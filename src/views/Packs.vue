<template>
  <v-app>
    <app-header></app-header>

    <v-main class="container">
      <app-search></app-search>

      <v-btn
          elevation="2"
          @click="minus"
          v-if="page > 1"
      >Prev page</v-btn>
      <v-btn
          elevation="2"
          @click="plus"
          v-if="hasNextPage"
      >Next page</v-btn>

      <app-table></app-table>

      <app-popup></app-popup>
    </v-main>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import AppFooter from "../components/AppFooter";
import AppSearch from "../components/AppSearch";
import AppHeader from "../components/AppHeader";
import AppTable from "../components/AppTable";
import AppPopup from "../components/AppPopup";

import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Packs',

  components: {
    AppHeader,
    AppFooter,
    AppSearch,
    AppPopup,
    AppTable,
  },

  mounted: async function() {
    await this.$store.dispatch('getPackages');
  },

  computed: {
    ...mapState({
      page: state => state.page,
      hasNextPage: state => state.hasNextPage,
    }),
  },

  methods: {
    ...mapMutations({
      plus: 'setPagePlus',
      minus: 'setPageMinus'
    })
  }
};
</script>
