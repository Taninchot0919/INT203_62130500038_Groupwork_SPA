<template>
  <!-- <modal v-if="isModalOn" @emitModal="toggleModal" /> -->
  <nav-bar />
  <!-- <h2>Before Router View</h2> -->
  <router-view />
</template>

<script>
// import Modal from "./components/Modal.vue";
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
  color: #2c3e50;
}
h2 {
  text-align: center;
}
</style>
