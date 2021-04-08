<template>
  <div id="nav">
    <router-link to="/" @toggleModal="toggleModal">Home</router-link>
    <router-link to="/addmember">Add Member</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  padding: 30px;
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