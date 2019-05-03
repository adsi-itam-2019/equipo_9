<template>
<v-container>
 <h1 class="display-3 font-weight-light">Encuentra tu casa ideal</h1>
  <v-layout align-start justify-space-between row wrap fill-height>
    <v-flex pr-4 py-4 xs12 sm4 v-for="(card, i) in cards" :key="i"  @click="$router.push(`/property/${card.id}`)">
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
        { title: 'Cuarto para estudiante cerca del ITAM', address: 'Guerrero no. 24', price:'$2,000', src: 'assets/img/c1.jpg', id:'1' },
        { title: 'Bonita casa cerca de san angel', address: 'Guerrero no. 32', price:'$3,000', src: 'assets/img/c2.jpg', id:'2' },
        { title: 'Casa de estudiantes cercana al ITAM', address: 'Guerrero no. 4', price:'$6,000', src: 'assets/img/c3.jpg', id:'3' },
        { title: 'Casa en la calle de guerrero', address: 'Guerrero no. 16', price:'$7,500', src: 'assets/img/c4.jpg', id:'4' },
        { title: 'Habitación estudiantil cerca del ITAM y la UNAM', address: 'Chihuahua no. 7', price:'$10,000', src: 'assets/img/c5.jpg', id:'5' },
        { title: 'Vive cerca del itam en la casa más comoda', address: 'Chihuahua no. 11', price:'$8,000', src: 'assets/img/c6.jpg', id:'6' },
        { title: 'Hermosa casa en colonia tizapan', address: 'Chihuahua no. 123', price:'$5,600', src: 'assets/img/c7.jpg', id:'7' },
        { title: 'Casa en la colonia progreso', address: 'Chihuahua no. 782', price:'$4,900', src: 'assets/img/c8.jpg', id:'8' },
        { title: 'Comoda casa a dos cuadras de periferico', address: 'Morelos no. 872', price:'$9,800', src: 'assets/img/c9.jpg', id:'9' },
        { title: 'Casa compartida para estudiantes', address: 'Morelos no. 5', price:'$7,400', src: 'assets/img/c10.jpg', id:'10' },
        { title: 'Cómodo cuarto para estudiante del ITAM (solo mujeres)', address: 'Morelos no. 8723', price:'$4,700', src: 'assets/img/c11.jpg', id:'11' },
        { title: 'Cuarto cercano al ITAM (solo estudiantes)', address: 'Frontera no. 2', price:'$2,000', src: 'assets/img/c12.jpg', id:'12' },
        { title: 'Casa en la calle frontera cercana al ITAM', address: 'Frontera no. 1', price:'$12,000', src: 'assets/img/c13.jpg', id:'13' },
        { title: 'Amplia casa de estudiantes en colonia san angel', address: 'Frontera no. 56', price:'$19,000', src: 'assets/img/c14.jpg', id:'14' },
        { title: 'Vive cerca del ITAM en la mejor casa', address: 'Frontera no. 92', price:'$8,650', src: 'assets/img/c15.jpg', id:'15' }
      ]
    })
  }
</script>
