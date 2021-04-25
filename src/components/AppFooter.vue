<template>
    <v-footer
        dark
        app
        class="footer"
        color="primary"
    >
      <v-card
          flat
          tile
          color="primary"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} - <strong>{{ getFullName }}</strong> <a target="_blank" href="https://github.com/edkiimrgnl">
          <v-icon class="white--text" >
            {{ icon }}
          </v-icon>
        </a>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
      author: {
        firstName: 'Egor',
        lastName: 'Kornilov',
      },
      icon: 'mdi-github'
    }
  },

  computed: {
    getFullName() {
      return `${this.author.firstName} ${this.author.lastName}`;
    }
  },
}
</script>
