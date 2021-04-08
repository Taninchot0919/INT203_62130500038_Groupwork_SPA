<template>
  <form @submit.prevent="addMember">
    <label>Name : </label>
    <input type="text" v-model="name" required /> <br />
    <label>Email : </label>
    <input type="email" v-model="email" required /> <br />
    <label>Age : </label>
    <input type="number" v-model="age" required /><br />
    <button>Submit</button>
  </form>
  <h2>{{ name }} ,{{ email }}, {{ age }}</h2>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      age: "",
      url: "http://localhost:3000/members"
    };
  },
  methods: {
    async addMember() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.age);

      if (this.name && this.email && this.age) {
        let newMember = {
          name: this.name,
          email: this.email,
          age: this.age
        };
        const res = fetch(this.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMember)
        });
        this.$router.push("/");
        console.log(res);
      }
    }
  }
};
</script>

<style>
form {
  text-align: center;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
}
form button {
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #2ecc40;
  color: white;
  cursor: pointer;
}
</style>