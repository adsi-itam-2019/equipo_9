<template>
  <v-container px-5>
    <v-form
      ref="form"
    >
      <v-text-field
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        label="password"
        :type="show1 ? 'text' : 'password'"
        required
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-layout align-center>
        <v-flex text-xs-center>
          <div>
            <v-btn
              color="#4069B3"
              float="center"
            >
              Sign in
            </v-btn>
          </div>
          <div>
            <v-btn 
            text 
            flat 
            color="primary"
            >
              ¿No tienes una cuenta? ¡Registrate!
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
        emailRules: [
          v => !!v || 'Proporcione un E-mail',
          v => /^[a-zA-Z0-9\.]+@itam\.mx$/.test(v) || 'Proporciona un E-mail válido del ITAM'
        ]
      }
    }
  }
</script>