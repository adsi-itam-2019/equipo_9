<template>
  <v-container px-5>
    <h2 class="display-2 font-weight-light mb-5 text-xs-center">¡Déjanos tus datos!</h2>
    <v-form
      ref="form"
    >
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <v-text-field
          v-model ="nombre"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="apellidos"
          :rules="apRules"
          label="Apellidos"
          required
        ></v-text-field>

        <v-text-field
          v-model="mail"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-radio-group v-model="genero" row :rules="test">
          <v-radio label="Hombre" value="hom"></v-radio>
          <v-radio label="Mujer" value="muj"></v-radio>
        </v-radio-group>

        <v-textarea
          v-model="msg"
          name="msg"
          label="Escriba un breve mensaje explicando por qué le interesa la propiedad"
          auto-grow
          value=""
        ></v-textarea>

        <v-btn
          :disabled="!valid"
          dark
          color="#4069B3"
          type="submit"
          @click.prevent="submit"
        >
          Contactar
        </v-btn>

      </v-flex>
    </v-layout>

    </v-form>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" >¡Gracias!</v-card-title>

        <v-card-text>
          El propietario se pondrá en contacto contigo pornto.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="$router.push(`/`)"
          >
          Entendido
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>


  export default {
    data: () => ({
      nombre :'',
      apellidos : '',
      mail: '',
      genero: '',
      msg: '',
      valid: true,
      nameRules: [
        v => !!v || 'Requerido',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un nombre válido'
      ],
      apRules: [
        v => !!v || 'Requerido',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un apellido válido'
      ],
      emailRules: [
        v => !!v || 'Requerido',
        v => /^[a-zA-Z0-9\.]+@itam\.mx$/.test(v) || 'Proporciona un e-mail válido del ITAM'
      ],
      select: null,
      radio: false,
      test:[ v => !!v || "Seleccione una opción"],
      dialog: false
    }),

    methods: {

      async submit () {
        if (this.$refs.form.validate()) {
          let mensaje ={
            idP: this.$route.params.id,
            nombre: this.nombre,
            apellido: this.apellidos,
            mail: this.mail,
            genero: this.genero,
            msg:  this.msg
          }
          console.log(mensaje.idP)
          await this.$store.dispatch('addMensaje', mensaje)
          console.log('válido')
          this.dialog = true
        } else {
          console.log('error')
        }
      }

    },
    computed: {
      data () {

      }
    }
  }
</script>
