<template>
  <v-container>
    <h1>Inicia Sesion</h1>
    <v-form
    class="mt-3"
    ref="form"
    v-model ="valid"
    lazy-validation
    >
      <v-text-field
       prepend-inner-icon="email"
       v-model="email"
       :rules="emailRules"
       label="Correo"
       required
      ></v-text-field>
      <v-text-field
      prepend-inner-icon="lock"
       v-model="pass"
       :rules='passRules'
       label="Contraseña"
       type = 'Password'
       required
      ></v-text-field>

      <v-btn
        class="white--text"
        color="#4069B3"
        :loading="loading"
        :disabled="disableButton || loading"
        @click="login"
      >
        Aceptar
      </v-btn>
    </v-form>
  </v-container>

</template>


<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      valid:true,
      email: '',
      emailRules:[
          v => !!v || 'Proporcione un correo',
      ],
      pass:'',
      passRules:[
        v => !!v || 'Porfavor ingrese su contraseña',
      ],
      loading: false
    }
  },
  computed: {
    disableButton () {
      return this.email === '' || this.pass === ''
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()) {
        try {

          this.loading = true
          let user = {
            email: this.email,
            pass: this.pass
          }
          await this.$store.dispatch('login', user)
          this.loading = false
          this.$router.push('/')

        } catch (error) {
          this.loading = false
          alert(error.message)
        }
      }
    }
  }
}
</script>
