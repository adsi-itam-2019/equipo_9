<template>
  <v-container px-5>
    <h2 class="display-2 font-weight-light mb-5 ">¡Déjanos tus datos!</h2>
    <v-form
      ref="form"
      v-model="valid"
    >
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
      
      <v-text-field
        :rules="copyRules"
        label="Confirma tu E-mail"
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
        color="#4069B3"
        @click="validate"
      >
        Contactar
      </v-btn>
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
        v => !!v || 'Por favor escriba su nombre',
        //v => v.length >= 4 || 'Al menos 4 caracteres',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un nombre válido'
      ],
      apRules: [
        v => !!v || 'Por favor escriba su apellido',
        //v => v.length >= 4 || 'Al menos 4 caracteres',
        v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un apellido válido'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Proporcione un E-mail',
        v => /^[a-zA-Z0-9\.]+@itam\.mx$/.test(v) || 'Proporciona un E-mail válido del ITAM'
      ],
      select: null,
      radio: false,
      test:[ v => !!v || "Seleccione una opción"],
      dialog:false
    }),
    computed: {
      copyRules() {
        return [
          () => (this.email === this.email2) || 'Los E-mails deben coincidir',
          v => !!v || 'Repite tu E-mail'
        ];
      },
    }, 

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.dialog=true;
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>