<template>
  <h2>Add Member</h2>
  <form @submit.prevent="addMember">
    <label>Name : </label>
    <input type="text" v-model="name" required /> <br />
    <label>Email : </label>
    <input type="email" v-model="email" required /> <br />
    <label>Age : </label>
    <input type="number" v-model="age" required /><br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddMember",
  data() {
    return {
      name: "",
      email: "",
      age: "",
      url: "http://localhost:3000/members",
    };
  },
  methods: {
    async addMember() {
      if (this.name && this.email && this.age) {
        let newMember = {
          name: this.name,
          email: this.email,
          age: this.age,
        };
        await fetch(this.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMember),
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
form {
  text-align: center;
  margin: 0 auto 0 auto;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  background-color: #f8f9fa;
}
form button {
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #2a9134;
  color: white;
  cursor: pointer;
}
h2 {
  color: green;
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
</style>