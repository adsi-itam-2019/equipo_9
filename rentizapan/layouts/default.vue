<template>
  <v-app>
    <v-toolbar
      fixed
      app
      color="#FCAF1F"
    >
      <v-btn large icon @click="$router.push('/')" flat>
        <img style="max-width: 50px;" src="~/assets/logo.png"/>
      </v-btn>

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
import logo from '~/assets/logo.png'
export default {
  data() {
    return {
      title: 'LOGO'
    }
  }
}
</script>
