<template>
  <v-container px-5>
    <h2 class="display-2 font-weight-light mb-5 text-xs-center">¡Déjanos tus datos!</h2>
    <v-form
      ref="form"
    >
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <v-text-field
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>
        
        <v-text-field
          :rules="apRules"
          label="Apellidos"
          required
        ></v-text-field>

        <v-text-field
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      
        <v-radio-group row :rules="test">
          <v-radio label="Hombre" value="hom"></v-radio>
          <v-radio label="Mujer" value="muj"></v-radio>
        </v-radio-group>
        <v-textarea
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
          Le propietario se pondrá en contacto contigo pornto.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="$router.replace('/')"
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
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Requerido',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un nombre válido'
      ],
      apRules: [
        v => !!v || 'Requerido',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un apellido válido'
      ],
      email: '',  
      emailRules: [
        v => !!v || 'Proporcione un E-mail',
        v => /^[a-zA-Z0-9\.]+@itam\.mx$/.test(v) || 'Proporciona un e-mail válido del ITAM'
      ],
      select: null,
      radio: false,
      test:[ v => !!v || "Seleccione una opción"],
      dialog: false
    }),

    methods: {

      submit () {
        if (this.$refs.form.validate()) {
          // this.$refs.form.reset()
          // this.$refs.form.resetValidation()
          console.log('válido')
        } else {
          console.log('error')
        }
      }

    }
  }
</script>