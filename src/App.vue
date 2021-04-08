<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      isModalOn: false
    };
  },
  methods: {
    toggleModal() {
      console.log("can emit");
      this.isModalOn = !this.isModalOn;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
