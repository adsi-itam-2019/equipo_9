<template>
	<v-container grid-list-xl>
    <v-layout>
      <v-btn icon class="ma-0" to="/">
        <v-icon color="#4069B3">
          arrow_back
        </v-icon>
      </v-btn>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md5>
        <v-img
        :src="data.imgUrl">
        </v-img>
        <!-- <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs4 v-for="i in images" :key="i">
              <v-img
              contain
              :lazy-src=i
              :src="i">
              </v-img>
            </v-flex>
          </v-layout>
        </v-container> -->
      </v-flex>
      <v-flex xs12 md7>

        <h2 class="display-2 mb-5">{{ data.titulo }}</h2>

        <h4 class="title mb-1">
          <v-icon class="mr-3">house</v-icon>
          Descripción
        </h4>

        <v-layout row wrap pl-5>
          <v-flex xs6 sm3 pt-0>
            <p class="subheading">{{ data.descripcion[0] }} dormitorios</p>
          </v-flex>
          <v-flex xs6 sm3 pt-0>
            <p class="subheading">{{ data.descripcion[1] }} camas</p>
          </v-flex>
          <v-flex xs6 sm3 pt-0>
            <p class="subheading">{{ data.descripcion[2] }} baños</p>
          </v-flex>
        </v-layout>

        <h4 class="title mb-1">
          <v-icon class="mr-3">location_on</v-icon>
          Ubicación
        </h4>

        <p class="subheading pl-5 mb-4">
          {{ data.calle }} {{ data.numero }} - {{ data.numInt }}, {{ data.colonia }}, {{ data.delegacion }}
        </p>

        <!-- <h4 class="title mb-1">
          <v-icon class="mr-3">vpn_key</v-icon>
          Fantástico proceso de llegada
        </h4>

        <p class="subheading pl-5">
          El 100% de los huéspedes han valorado con 5 estrellas el proceso de llegada
        </p> -->

        <h4 class="title mt-5 mb-3">
          Servicios
        </h4>

        <v-layout row wrap mb-2>
          <v-flex xs6 v-for="elem in data.servicios" :key="elem">
            <p class="subheading">
              <!-- <v-icon>{{ elem.icon }}</v-icon>   -->
              {{ elem }}
            </p>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 pa-0>
            <v-btn large dark color="#4069B3" @click="$router.push(`/datos/${$route.params.id}`)">Contactar</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    data () {
      const id = this.$route.params.id
      let data = {...this.$store.getters['getPropiedadById'](id)}
      return data
    }
  }
}
</script>

<style>

</style>
