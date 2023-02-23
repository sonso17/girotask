<template>
  <capcaleraC></capcaleraC>

  
  <router-view> </router-view>

  <peuPagina></peuPagina>

</template>
<script>
import peuPagina from './components/peuPagina.vue'
import capcaleraC from './components/capcaleraC.vue'
import axios from 'axios'
export default {
  name: "App",
  components: { capcaleraC, peuPagina },
  data() {
    return {
      diaList: {}
    }
  },
  methods: {
    getDia(){
      axios.get("http://localhost/API/server.php")
      .then(resultat =>  this.diaList = resultat.data)
    }
  },
  created(){
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
