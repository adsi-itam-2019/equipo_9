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

      <v-btn flat
      @click="goTo">
        anuncia tu propiedad
      </v-btn>

      <v-btn 
      outline
      v-if="authenticated"
      @click="logout">
        cerrar sesión
      </v-btn>
      <v-btn
      outline
      v-if="authenticated"
      @click="perfil">
      Perfil
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
  },
  computed: {
    authenticated () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (error) {
        console.log(error)
      }
    },
    goTo () {
      if (this.authenticated) {
        this.$router.push('/arrendador')
      } else {
        this.$router.push('/login')
      }
    },
    perfil () {
      this.$router.push('/perfil');
    }
  },
  mounted () {
    this.$store.dispatch('checkUser')
  }
}
</script>
