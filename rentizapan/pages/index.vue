<template>
  <v-layout row wrap justify-center align-center>
    <v-card v-for="(item, i) in casas" :key="i" @click="$router.push(`/property/${item.id}`)">
      <v-flex xs6>
        <div>
          {{ item.titulo }} - {{ item.img_url }}
        </div>
      </v-flex>
    </v-card>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      casas: [
        { titulo: 'Paola', img_url: 'SM', precio: 2909, id: '1' },
        { titulo: 'Paola', img_url: 'SM', precio: 2909, id: '2' },
        { titulo: 'Paola', img_url: 'SM', precio: 2909, id: '3' },
        { titulo: 'Paola', img_url: 'SM', precio: 2909, id: '4' }
      ]
    }
  }
}
</script>
