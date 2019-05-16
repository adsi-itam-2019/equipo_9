<template>
<v-container fluid grid-list-lg>

  <h1 class="display-2 font-weight-light mb-5">Bienvenido, {{ email }}</h1>
  <h2 class="title mb-3">Adiministra tus propiedades</h2>

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
    <v-flex
    xs12
    sm6
    md4
    class="clickable"
    v-for="(card, i) in propiedades"
    :key="i"
    @click="$router.push(`/perfil/propiedad/${card.id}`)">
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
            Editar
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
    email () {
      return this.$store.getters.getUser.email
    },
    propiedades () {
      let uid = this.$store.getters.getUser.uid
      return this.$store.getters.getPropiedadesByUserId(uid)
    }
  },
  methods: {
    formatNumber (val) {
      return numeral(val).format('$0,0.00')
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>