<template>
  <Navigate></Navigate>
  <router-view />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navigate from '@/components/Navigate.vue';


export default {
  components: {
    Navigate,
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
