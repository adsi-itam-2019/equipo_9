<template>
  <v-app>
    <v-toolbar
      fixed
      app
      color="#FCAF1F"
    >
      <v-toolbar-title v-text="title" @click="$router.push('/')"/>
      <v-spacer />
      <v-btn flat>
        Anúnciate
      </v-btn>
      <v-btn flat>
        Sign up
      </v-btn>
      <v-btn flat>
        Login
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
