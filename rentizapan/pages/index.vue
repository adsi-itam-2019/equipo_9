<template>
<v-container>
 <h1 class="display-3 font-weight-light">Encuentra tu casa ideal</h1>
  <v-layout align-start justify-space-between row wrap fill-height>
    <v-flex pr-4 py-4 xs4 sm4 v-for="card in cards" :key="card.title"  @click="$router.push('/property/${item.id}')">
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
        { title: 'Casa no.1', address: 'Guerrero no. 24', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'1' },
        { title: 'Casa no.2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', id:2 },
        { title: 'Casa no.3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', id: 3 },
        { title: 'Casa no.4', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', id: 4 }
      ]
    })
  }
</script>
