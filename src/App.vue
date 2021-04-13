<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style>
body {
  background-color: #f8f9fa;
  display: block;
  width: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2 {
  text-align: center;
}
</style>
