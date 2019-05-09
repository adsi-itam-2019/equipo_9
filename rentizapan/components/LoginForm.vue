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
       solo
      ></v-text-field>
      <v-text-field
      prepend-inner-icon="lock"
       v-model="pass"
       :rules='passRules'
       label="Contraseña"
       type = 'Password'
       required
       solo
      ></v-text-field>

      <v-btn
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
        emailRules:[
            v => !!v || 'Proporcione un E-mail',
        ],
        pass:'',
        passRules:[
          v => !!v || 'Porfavor ingrese su contraseña',
        ]
    }),
  }
</script>
