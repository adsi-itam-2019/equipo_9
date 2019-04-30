<template>
  <v-app>
    <v-toolbar
      fixed
      app
      color="yellow"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn flat>
        login
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'LOGO'
    }
  }
}
</script>
