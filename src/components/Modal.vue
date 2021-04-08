<template>
  <div class="modal">
    <span class="material-icons" @click="emitModal"> close </span>
    <form>
      <label>Name : </label>
      <input type="text" v-model="name" required /> <br />
      <label>Email : </label>
      <input type="email" v-model="email" required /> <br />
      <label>Age : </label>
      <input type="number" v-model="age" required /><br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      name: "",
      email: "",
      age: "",
      url: "http://localhost:3000/members/" + this.id
    };
  },
  methods: {
    emitModal() {
      console.log("can access at modal");
      this.$emit("emitModal");
    }
  },
  async mounted() {
    console.log(this.url);
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(this.members);
    this.name = data.name;
    this.email = data.email;
    this.age = data.age;
  }
};
</script>

<style scoped>
.modal {
  background-color: rebeccapurple;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  text-align: right;
}
.material-icons {
  color: white;
  font-size: 50px;
  margin-top: 10px;
  margin-right: 30px;
  cursor: pointer;
}
</style>