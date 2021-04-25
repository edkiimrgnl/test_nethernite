<template>
  <v-simple-table>
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Type
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="pack in paginatedPackages"
        :key="pack.name"
        @click="popUp({name: pack.name, type: pack.type})"
    >
      <td>{{ pack.name }}</td>
      <td>{{ pack.type }}</td>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'Table',

  computed: {
    ...mapState({
      page: state => state.page,
      filter: state => state.filter,
      packages: state => state.packages,
      packVersion: state => state.packageVersion,
    }),

    hasNextPage() {
      return this.filteredPackages.length > this.endIndex;
    },

    startIndex() {
      return (this.page - 1) * 10;
    },

    endIndex() {
      return this.page * 10;
    },

    filteredPackages() {
      return this.packages.filter(pack => {
        return pack.name.includes(this.filter.toLowerCase());
      });
    },

    paginatedPackages() {
      return this.filteredPackages.slice(this.startIndex, this.endIndex);
    },
  },

  methods: {
    ...mapActions({
      getPackVersion: 'getPackageVersion',
      getPack: 'getPackage'
    }),

    async popUp({name, type}) {
      await this.getPackVersion({name, type});
      await this.getPack({name, type, version: this.packVersion});
      this.$store.state.pop = true;
    },
  }
}
</script>
