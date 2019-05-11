<template>
  <v-container>
  <h1 class="display-3 font-weight-light">Agrega una propiedad</h1>
   <v-layout class="mt-2" row wrap>
    <v-flex xs12 sm5>
    <v-form
      ref="form"
      v-model ="valid"
      lazy-validation
      >
      <v-text-field
       v-model="titulo"
       :rules='[]'
       label="Título"
       type="text"
       required
      ></v-text-field>
      <v-text-field
       v-model="calle"
       :rules='[]'
       label="Calle"
       type="text"
       required
      ></v-text-field>
        <v-text-field
         v-model="numero"
         :rules="[]"
         label="Número"
         type="text"
         required
        ></v-text-field>
        <v-text-field
         v-model="numInt"
         :rules='[]'
         label="Número interior (si aplica)"
        ></v-text-field>
        <v-text-field
         v-model="colonia"
         :rules='[]'
         label="Colonia"
         required
        ></v-text-field>
        <v-text-field
         v-model="del"
         :rules='[]'
         label="Delegación"
         required
        ></v-text-field>
      </v-form>
  </v-flex>
    <v-flex offset-sm1 offset-xs0 xs12 sm5>
      <h2 class="headline font-weight-light"> Seleccione los servicios que tiene la propiedad</h2>
      <v-form
      ref="form"
      v-model ="valid"
      lazy-validation>
      <v-container>
      <v-layout v-bind="binding" wrap align-start justify-space-between>
        <v-flex xs1 sm4>
        <v-checkbox class ="mx-2" v-model="servicios" label="Cocina" value="cocina"></v-checkbox>
        </v-flex>
      <v-flex xs1 sm4>
          <v-checkbox class ="mx-2" v-model="servicios" label="Wi-Fi" value="wifi"></v-checkbox>
      </v-flex>
      <v-flex xs1 sm4>
        <v-checkbox class ="mx-2" v-model="servicios" label="Lavadora" value="lavadora"></v-checkbox>
      </v-flex>
      <v-flex xs1 sm4>
        <v-checkbox class ="mx-2" v-model="servicios" label="Secadora" value="secadora"></v-checkbox>
      </v-flex>
      <v-flex xs1 sm4>
        <v-checkbox class ="mx-2" v-model="servicios" label="Estacionamiento" value="estacionamiento"></v-checkbox>
      </v-flex>
      <h2 class="headline font-weight-light">Agregue una descripción de la propiedad</h2>
      </v-layout>
      </v-container>
      </v-form>
    </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
      valid:true,
      titulo: '',
      calle : '',
      numero: '',
      numInt: '',
      colonia: '',
      del: '',
      servicios: [],
      loading: false
  }),
  methods: {
    async signup () {
      if (this.$refs.form.validate()) {
        this.loading = true
        let propiedad = {
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
  },
  computed: {
      binding () {
        const binding = {}
        if (this.$vuetify.breakpoint.xs) binding.column = true
        return binding
      }
    }
}
</script>
