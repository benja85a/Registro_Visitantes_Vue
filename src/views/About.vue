<template>
  <div>
    <h1>Datos de la API</h1>
    <ul v-if="data.length">
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
    <p v-else>No hay datos disponibles</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Realiza la solicitud GET a tu endpoint de la API
        const response = await axios.get('http://localhost:8000/api/menu/get');

        // Almacena los datos obtenidos en el estado de tu componente
        this.data = response.data;
        console.log(data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }
};
</script>
