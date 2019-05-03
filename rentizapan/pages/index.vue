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
        { title: 'Cuarto para estudiante cerca del ITAM', address: 'Guerrero no. 24', price:'$2,000', src: 'http://propiedades.com/blog/wp-content/uploads/2016/05/734x461xpedregal-2-la-magdalena-contreras-df-1767766-foto-09.jpg.pagespeed.ic.HMQtpo1h7p.jpg', id:'1' },
        { title: 'Bonita casa cerca de san angel', address: 'Guerrero no. 32', price:'$3,000', src: 'http://d15jm47acbjce0.cloudfront.net/s838x629_1469294888960_545420496.jpg', id:'2' },
        { title: 'Casa de estudiantes cercana al ITAM', address: 'Guerrero no. 4', price:'$6,000', src: 'http://habita.la/images/complete/e5396e4bff22f16c57792564c5673986.JPG', id:'3' },
        { title: 'Casa en la calle de guerrero', address: 'Guerrero no. 16', price:'$7,500', src: 'http://t-ec.bstatic.com/images/hotel/max1024x768/105/105534069.jpg', id:'4' },
        { title: 'Habitación estudiantil cerca del ITAM y la UNAM', address: 'Chihuahua no. 7', price:'$10,000', src: 'http://www.dondeir.com/wp-content/uploads/2016/10/casas-embrujadas-en-la-ciudad-de-mexico-1.jpg', id:'5' },
        { title: 'Vive cerca del itam en la casa más comoda', address: 'Chihuahua no. 11', price:'$8,000', src: 'http://images.sipse.com/1ZXj2phHaVPELX0QFu1_FGbkTxA=/800x497/smart/2017/12/01/1512154142071.jpg', id:'6' },
        { title: 'Hermosa casa en colonia tizapan', address: 'Chihuahua no. 123', price:'$5,600', src: 'http://habita.la/images/complete/290327331ab3698ccbcebce8d3004775.JPG', id:'7' },
        { title: 'Casa en la colonia progreso', address: 'Chihuahua no. 782', price:'$4,900', src: 'http://www.casgasa.com/images/imagery/avaluos-casas-ciudad-de-mexico.jpg', id:'8' },
        { title: 'Comoda casa a dos cuadras de periferico', address: 'Morelos no. 872', price:'$9,800', src: 'https://d3te2s0dmhk13a.cloudfront.net/1498423612934_-895085575.JPG', id:'9' },
        { title: 'Casa compartida para estudiantes', address: 'Morelos no. 5', price:'$7,400', src: 'http://www.ciudadmexico.com.mx/images/zones/narvarte/casas_narvarte.jpg', id:'10' },
        { title: 'Cómodo cuarto para estudiante del ITAM (solo mujeres)', address: 'Morelos no. 8723', price:'$4,700', src: 'http://images01.inmomexico.com/814/369/8143692000XM/f3ccdd27d2000e3f9255a7e3e2c48800.jpg', id:'11' },
        { title: 'Cuarto cercano al ITAM (solo estudiantes)', address: 'Frontera no. 2', price:'$2,000', src: 'http://imganuncios.mitula.net/renta_casas_colonia_valle_lujo_y_plusvalia_6490097418771260271.jpg', id:'12' },
        { title: 'Casa en la calle frontera cercana al ITAM', address: 'Frontera no. 1', price:'$12,000', src: 'http://realestatemarket.com.mx/images/2016/FEBRERO/1002/1002g-precio-de-las-casas-en-la-ciudad-de-mexico-sube-9-en-2015.jpg', id:'13' },
        { title: 'Amplia casa de estudiantes en colonia san angel', address: 'Frontera no. 56', price:'$19,000', src: 'http://www.bienesonline.com/mexico/photos/casa-en-colonia-del-valle-13766894510.jpg', id:'14' },
        { title: 'Vive cerca del ITAM en la mejor casa', address: 'Frontera no. 92', price:'$8,650', src: 'http://nuva.mx/wp-content/uploads/2016/08/Foto-5-Casa.jpg', id:'15' }
      ]
    })
  }
</script>
