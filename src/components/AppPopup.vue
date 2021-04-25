<template>
  <div
      v-if="packageData"
      class="overlay"
      @click="popDown"
  >
    <v-card
        elevation="2"
        outlined
        tile
        v-if="packageData"
        class="popup"
    >
      <v-card-title>{{ packName }}</v-card-title>
      <v-card-text>
        <ul>
          <li
              v-for="file in packMain"
          >{{ file.type }} - {{ file.name }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'Popup',

  computed: {
    ...mapGetters({
      packName: 'packageDataName',
      packMain: 'packageDataMain'
    }),

    pop: {
      get() {
        return this.$store.state.pop;
      },
      set(value) {
        this.$store.commit('setPop', value);
      }
    },

    packageData: {
      get() {
        return this.$store.state.packageData;
      },
      set(value) {
        this.$store.commit('setPackage', value);
      }
    }
  },

  methods: {

    popDown(e) {
      if (e.target.className === 'overlay') {
        this.pop = false;
        this.packageData = null;
      }
    }
  }
}
</script>
