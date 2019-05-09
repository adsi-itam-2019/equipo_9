<template>
  <v-container>
  <h1 class="display-3 font-weight-light">Para anunciar tu propiedad inicia sesión o crea una cuenta nueva</h1>
  <v-layout align-center justify-around column fill-height/>
    <v-flex xs6>
      <v-card class='mt-5'>
       <login-form></login-form>
      </v-card>
    </v-flex>
    <v-flex xs6>
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
    }),
  }
</script>
