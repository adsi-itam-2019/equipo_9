<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 >
      <div v-for="(item, i) in names" :key="i">
        {{ item.name }} - {{ item.role }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      names: [
        { name: 'Paola', role: 'SM' },
        { name: 'Jaime', role: 'PO' },
        { name: 'Diego', role: 'FD' },
        { name: 'Alex', role: 'FD' }
      ]
    }
  }
}
</script>
