<template>
  <v-container>
  <h1 class="display-3 font-weight-light">Agregue una propiedad</h1>
   <v-layout class="mt-3" row wrap>
    <v-flex class="mt-4" xs12>
    <h2 class="headline font-weight-light">Primero ingrese la dirección dónde se encuentra</h2>
    <v-form
      ref="form"
      v-model ="valid"
      lazy-validation
      >
      <v-text-field
       v-model="titulo"
       :rules='rulesTitulo'
       label="Título"
       type="text"
       required
      ></v-text-field>
      <v-text-field
       v-model="calle"
       :rules='rulesCalle'
       label="Calle"
       type="text"
       required
      ></v-text-field>
        <v-text-field
         v-model="numero"
         :rules="rulesNum"
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
         :rules='rulesColonia'
         label="Colonia"
         required
        ></v-text-field>
        <v-text-field
         v-model="del"
         :rules='rulesDel'
         label="Delegación"
         required
        ></v-text-field>
      <h2 class="headline font-weight-light"> Seleccione los servicios que tiene la propiedad</h2>
      <v-container>
      <v-layout v-bind="binding" wrap align-start justify-space-between>
        <v-flex xs1 sm4>
          <v-checkbox
          append-icon='local_dining'
          class ="mx-2"
          v-model="servicios"
          label="Cocina"
          value="Cocina"
          ></v-checkbox>
        </v-flex>
        <v-flex xs1 sm4>
          <v-checkbox
          append-icon='wifi'
          class ="mx-2"
          v-model="servicios"
          label="Wi-Fi"
          value="Wi-Fi"
          ></v-checkbox>
        </v-flex>
        <v-flex xs1 sm4>
          <v-checkbox
          append-icon='local_laundry_service'
          class ="mx-2"
          v-model="servicios"
          label="Lavadora"
          value="Lavadora"
          ></v-checkbox>
        </v-flex>
        <v-flex xs1 sm4>
          <v-checkbox
          append-icon='trip_origin'
          class ="mx-2"
          v-model="servicios"
          label="Secadora"
          value="Secadora"
          ></v-checkbox>
        </v-flex>
        <v-flex xs1 sm4>
          <v-checkbox
          append-icon='directions_car'
          class ="mx-2"
          v-model="servicios"
          label="Estacionamiento"
          value="Estacionamiento"
          ></v-checkbox>
        </v-flex>
      </v-layout>
      </v-container>
      <h2 class="headline font-weight-light">Agregue una descripción de la propiedad</h2>
      <v-container>
        <v-layout v-bind="binding" wrap align-start justify-space-between>
        <v-flex xs1 sm4>
          <v-select
             v-model="descripcion[0]"
             :items="[1,2,3,4,5,6,7,8,9,10]"
             :rules="rulesCuartos"
             label="Número de cuartos"
             required
          ></v-select>
        </v-flex>
        <v-flex xs1 sm4>
          <v-select
             v-model="descripcion[1]"
             :items="[1,2,3,4,5,6,7,8,9,10]"
             :rules="rulesCamas"
             label="Número de camas"
             required
          ></v-select>
         </v-flex>
        <v-flex xs1 sm4>
          <v-select
             v-model="descripcion[2]"
             :items="[1,2,3,4,5,6,7,8,9,10]"
             :rules="rulesBaños"
             label="Número de baños"
             required
          ></v-select>
        </v-flex>
        </v-layout>
      </v-container>
      <v-container>
      <h2 class="headline font-weight-light">Incluya una fotografía de su propiedad</h2>
      <v-layout v-bind="binding" wrap align-start justify-space-between>
        <v-flex class = "mt-3" xs12 sm6>
          <v-btn color="#4069B3" class = "white--text" @click="pickFile">Suba una foto</v-btn>
          <input type ="file" ref="inputFile" @change="filePicked" accept="image/*" style="display:none;" />
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img contain :src="imgUrl"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>Renta por mes</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            v-model="precio"
            solo
            label="Renta"
            type ="number"
            prefix="$"
            required
            :rules = "rulesRenta"
          ></v-text-field>
        </v-flex>
      </v-layout>
      </v-form>
    </v-flex>
    <v-layout row right-align justify-end>
      <v-flex sm5 xs7 md2>
        <v-btn
        class ="primary"
        type="submit"
        :loading="loading"
        :disabled="loading"
        @click.prevent="agregarPropiedad">
        Agregar Propiedad
      </v-btn>
      </v-flex>
    </v-layout>
    </v-layout>

  <v-dialog
    v-model = "dialog"
    width = 500
  >
    <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        ¡Propiedad agregada exitosamente!
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            flat
            @click="aceptar"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      precio: '',
      servicios: [],
      descripcion:[0,0,0],
      imgUrl :'',
      image: null,
      rulesTitulo :[ v => !!v || 'Ingrese un título para su propiedad',],
      rulesCalle : [ v => !!v || 'Ingrese la calle en dónde se encuentra la propiedad',],
      rulesNum : [v => !!v || 'Ingrese el número en el que se encuentra la propiedad (o alguna referencia)',],
      rulesColonia: [v => !!v || 'Ingrese la colonia dónde se encuentra la propiedad',],
      rulesDel: [v => !!v || 'Ingrese la delegación dónde se encuentra la propiedad',],
      rulesCuartos :[v => !!v || 'Indique el numero de cuartos',],
      rulesCamas : [v => !![v & 0] || 'Indique el numero de camas',],
      rulesBaños : [v => !!v || 'Indique el numero de baños',],
      rulesRenta : [v => !!v || 'Indique lo que espera recibir de renta por mes',],
      loading: false,
      dialog: false
  }),
  methods: {
    async agregarPropiedad () {
      if (this.$refs.form.validate()) {
        this.loading = true
        let user = this.$store.getters.getUser
        console.log(user)
        let propiedad = {
          uid : user.uid,
          titulo: this.titulo,
          calle: this.calle,
          numero: this.numero,
          numInt: this.numInt,
          colonia: this.colonia,
          delegacion: this.del,
          servicios: this.servicios,
          descripcion : this.descripcion,
          precio: this.precio,
          image : this.image
        }
        await this.$store.dispatch('addProperty', propiedad)
        this.dialog = true
        this.loading = false
      } else {
        this.loading = false
        console.log('Invalid form')
      }
    },
    pickFile(){
      this.$refs.inputFile.click()
    },
    filePicked(event){
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0){
        return alert("Por favor suba un archivo de imagen válido")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () =>{
        this.imgUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    aceptar(){
      this.dialog = false
      //TODO: hacer perfil
      this.$router.push(`/perfil`)
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
