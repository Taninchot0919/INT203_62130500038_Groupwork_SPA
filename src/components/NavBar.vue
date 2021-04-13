<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'AddMember' }">Add Member</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #2d6a4f;
  margin-left: 10px;
  text-decoration: none;
  font-size: large;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a:hover {
  color: #95d5b2;
}
</style>