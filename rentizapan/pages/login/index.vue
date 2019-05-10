<template>
  <v-container px-5>
  <v-layout row wrap>

      <h1 class="display-2 font-weight-light">Para anunciar tu propiedad:&nbsp</h1>
      <a @click = "login=true; signup=false" class="display-2 font-weight-light">inicia sesión</a>
      <h1 class="display-2 font-weight-light">&nbsp o &nbsp</h1>
      <a @click = "login=false; signup=true" class="display-2 font-weight-light">crea una cuenta nueva</a>

  </v-layout>

  <v-layout align-center justify-center>
    <v-flex v-if="login" xs12 sm6>
      <v-card class='mt-5'>
       <login-form></login-form>
      </v-card>
    </v-flex>
    <v-flex v-if="signup" xs12 sm6>
      <v-card class='mt-5'>
       <signup-form></signup-form>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>


<script>
  import LoginForm from '~/components/LoginForm.vue';
  import SignupForm from '~/components/SignupForm.vue'
  export default {
    components: {
      LoginForm,
      SignupForm
    },
    data: () => ({
      login: false,
      signup: true
    }),
  }
</script>
