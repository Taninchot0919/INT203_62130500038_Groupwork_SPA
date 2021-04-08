<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'AddMember' }">Add Member</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    methodEmit() {
      console.log("Can access");
    }
  }
};
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>