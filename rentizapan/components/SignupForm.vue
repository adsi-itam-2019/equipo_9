<template>
  <v-container>
    <h1>Crea tu cuenta</h1>
    <v-form
    class="mt-3"
    ref="form"
    v-model ="valid"
    lazy-validation
    >
    <v-text-field
     v-model="nombre"
     :rules='nomRules'
     label="Nombre"
     type="text"
     required
    ></v-text-field>
    <v-text-field
     v-model="apellidos"
     :rules='apRules'
     label="Apellidos"
     type="text"
     required
    ></v-text-field>
      <v-text-field
       v-model="email"
       :rules="emailRules"
       label="Correo"
       type="email"
       required
      ></v-text-field>
      <v-text-field
       v-model="pass"
       :rules='passRules'
       label="Contraseña"
       type = 'password'
       required
      ></v-text-field>
      <v-text-field
       v-model="pass2"
       :rules='passRules2'
       label="Confirma tu contraseña"
       type = 'Password'
       required
      ></v-text-field>

      <v-btn
        class ="white--text"
        color="#4069B3"
        type="submit"
        :loading="loading"
        :disabled="loading"
        @click.prevent="signup"
      >
        Aceptar
      </v-btn>
    </v-form>
  </v-container>

</template>


<script>
export default {
  data: () => ({
      valid:true,
      email: '',
      emailRules:[
        v => !!v || 'Proporcione un correo',
      ],
      pass:'',
      pass2:'',
      passRules:[
        v => !!v || 'Ingrese su contraseña',
      ],
      passRules2:[
        v => !!v || 'Confirme su contraseña',
      ],
      nombre:'',
      nomRules: [  v => !!v || 'Ingrese su nombre',],
      apellidos:'',
      apRules: [ v => !!v || 'Ingrese su apellido',],
      loading: false
  }),
  methods: {
    async signup () {
      if (this.$refs.form.validate()) {
        this.loading = true
        let user = {
          email: this.email,
          pass: this.pass,
          nombre: this.nombre,
          apellidos: this.apellidos,
        }
        await this.$store.dispatch('createUser', user)
        this.$router.push('/')
        // TODO: Crear ruta y formulario
        // this.router.push('/agrega-propiedad')
        this.loading = false
      } else {
        this.loading = false
        console.log('Invalid form')
      }
    }
  }
}
</script>
