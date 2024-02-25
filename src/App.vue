<template>
  <div id="app">
    <sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  data: () => ({
    
  }),
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sidebar {
  margin-top: 49px; /* Ajusta el valor según sea necesario para posicionar el sidebar debajo del botón */
}
</style>
