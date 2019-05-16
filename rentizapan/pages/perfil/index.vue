<template>
<v-container fluid grid-list-lg>

  <h1 class="display-3 font-weight-light">Bienvenido, {{this.$store.getters.getUser['email']}}</h1>
  <h2>Adiministra tus propiedades</h2>

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
            Más información
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
      //this.$store.dispatch('checkUser')
      let uid = this.$store.getters.getUser['uid'];
      return this.$store.getters.getPropiedadesByUserId(uid);
      return this.$store.getters.getPropiedadesByUserId("NIaepF9qQgZF0cLXv3aloslLzn82");
    }
  },
  methods: {
    formatNumber (val) {
      return numeral(val).format('$0,0.00')
    }
  },
  async mounted () {
    this.loading = true
    //await this.$store.dispatch('fetchUser')
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