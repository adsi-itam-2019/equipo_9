<template>
<v-container>
 <h1 class="display-3 font-weight-light">Encuentra tu casa ideal</h1>
  <v-layout align-start justify-space-between row wrap fill-height>
    <v-flex pr-4 py-4 xs4 sm4 v-for="(card, i) in cards" :key="i"  @click="$router.push(`/property/${card.id}`)">
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
          <v-btn flat color="orange">Más información</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex> 
  </v-layout>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Casa no.1', address: 'Guerrero no. 12', price:'$1,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'1' },
        { title: 'Casa no.2', address: 'Guerrero no. 24', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'2' },
        { title: 'Casa no.43', address: 'Guerrero no. 321', price:'$3,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'3' },
        { title: 'Casa no.19', address: 'Guerrero no. 465', price:'$4,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'4' },
        { title: 'Casa no.11', address: 'Guerrero no. 532', price:'$5,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'5' },
        { title: 'Casa no.13', address: 'Guerrero no. 632', price:'$6,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'6' },
        { title: 'Casa no.2', address: 'Guerrero no. 62', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'7' },
        { title: 'Casa no.6', address: 'Guerrero no. 24', price:'$8,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'8' },
        { title: 'Casa no.5', address: 'Guerrero no. 4', price:'$9,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'9' },
        { title: 'Casa no.32', address: 'Guerrero no. 243', price:'$1,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'10' },
        { title: 'Casa no.1', address: 'Guerrero no. 98', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'11' },
        { title: 'Casa no.21', address: 'Guerrero no. 65', price:'$4,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'12' },
        { title: 'Casa no.56', address: 'Guerrero no. 432', price:'$5,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'13' },
        { title: 'Casa no.78', address: 'Guerrero no. 643', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'14' },
        { title: 'Casa no.9', address: 'Guerrero no. 987', price:'$6,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'15' },
        { title: 'Casa no.35', address: 'Guerrero no. 912', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'16' },
        { title: 'Casa no.90', address: 'Guerrero no. 513', price:'$8,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'17' },
        { title: 'Casa no.75', address: 'Guerrero no. 892', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'18' }
      ]
    })
  }
</script>
