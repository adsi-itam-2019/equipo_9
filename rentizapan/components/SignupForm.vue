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
     required
     solo
    ></v-text-field>
    <v-text-field
     v-model="apellido"
     :rules='apRules'
     label="Apellido"
     required
     solo
    ></v-text-field>
      <v-text-field
       v-model="email"
       :rules="emailRules"
       label="Correo"
       required
       solo
      ></v-text-field>
      <v-text-field
       v-model="email2"
       :rules="emailRules2"
       label="Confirma tu correo"
       required
       solo
      ></v-text-field>
      <v-text-field
       v-model="pass"
       :rules='passRules'
       label="Contraseña"
       type = 'Password'
       required
       solo
      ></v-text-field>
      <v-text-field
       v-model="pass2"
       :rules='passRules2'
       label="Confirma tu contraseña"
       type = 'Password'
       required
       solo
      ></v-text-field>

      <v-btn
      class ="white--text"
      color="#4069B3"
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
        email2:'',
        emailRules:[
            v => !!v || 'Proporcione un correo',
            v => /^[a-zA-Z0-9\.]+@itam\.mx$/.test(v) || 'Proporciona un e-mail válido del ITAM'
        ],
        emailRules2: [
          v => !!v || 'Confirme su correo',
        ],
        pass:'',
        pass2:'',
        passRules:[
          v => !!v || 'Ingrese su contraseña',
          v => v.length>=6 || "La contraseña debe ser de mínimo 6 caracteres"
        ],
        passRules2:[
          v => !!v || 'Confirme su contraseña',
          v => v.length>=6 || "La contraseña debe ser de mínimo 6 caracteres"
        ],
        nombre:'',
        nomRules: [  v => !!v || 'Ingrese su nombre',
                     v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un nombre válido'],
        apellido:'',
        apRules: [ v => !!v || 'Ingrese su apellido',
                   v => /^[^0-9_/!@#$%&*\(\)\-\\:;.,><\[\]\{\}]+$/.test(v)|| 'Escriba un apellido válido']
    }),
  }
</script>
