<template>
<v-container fluid grid-list-lg>

  <h1 class="display-3 font-weight-light">Encuentra tu casa ideal</h1>

  <v-layout row wrap justify-center>
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
          :src="card.src"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class= "title" v-text="card.title"></span><br>
            <span v-text="card.address"></span><br>
            <span class="grey--text" v-text="card.price"></span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn 
          flat 
          color="#4069B3"
          dark>
            Más información
          </v-btn>
        </v-card-actions>
      </v-card>
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
    propiedades () {
      return this.$store.getters.getPropiedades
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>

