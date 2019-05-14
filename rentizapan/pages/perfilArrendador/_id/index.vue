<template>
<v-container fluid grid-list-lg>

  <h1 class="display-3 font-weight-light">Bienvenido a tu perfil. Estas son tus propiedades.</h1>

  <v-layout row wrap justify-center v-if="loading">
    <v-flex xs12>
      <v-progress-circular
        :size="70"
        :width="7"
        color="grey"
        indeterminate
      ></v-progress-circular>
    </v-flex>
  </v-layout>

  <v-layout row wrap v-else>
    <!-- ======= Aquí hace falta que el el for sea solo sobre 
        las propiedades que tienen el id del arrendador 
        que se paso en el parametro y que al click, esta se elimine ========================-->
    <v-flex
    xs12
    sm6
    md4
    class="clickable"
    v-for="(card, i) in propiedades"
    :key="i"
    @click="$router.push(`/property/${card.id}`)">
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="card.imgUrl"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class= "title">{{ card.titulo }}</span><br>
            <span v-text="card.calle"></span> <span>{{ card.numero }}</span><br>
            <span class="font-weight-bold">{{ formatNumber(card.precio) }} / mes</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
          flat
          color="#4069B3"
          dark>
            Eliminar propiedad
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</v-container>
</template>


<script>
import numeral from 'numeral'
export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    propiedades () {
      return this.$store.getters.getPropiedades
    }
  },
  methods: {
    formatNumber (val) {
      return numeral(val).format('$0,0.00')
    }
  },
  async mounted () {
    this.loading = true
    await this.$store.dispatch('fetchProperties')
    this.loading = false
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
