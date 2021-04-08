<template>
  <div class="modal" @submit.prevent="">
    <h2>Edit or Delete</h2>
    <span class="material-icons" @click="backToHome"> close </span>
    <form>
      <label>Name : </label>
      <input type="text" v-model="name" required /> <br />
      <label>Email : </label>
      <input type="email" v-model="email" required /> <br />
      <label>Age : </label>
      <input type="number" v-model="age" required /><br />
      <div class="confirm">
        <label>Please check this box to confirm you do</label>
        <input
          type="checkbox"
          value="true"
          v-model="readyToDelete"
          required
        /><br />
      </div>
      <button class="submit" @click="editMember">Edit</button>
      <button class="delete" @click="deleteMember">Delete</button><br />
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
      url: "http://localhost:3000/members/" + this.id,
      readyToDelete: false
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    async editMember() {
      if (this.readyToDelete) {
        console.log("Edit Member Method");
        let editData = {
          name: this.name,
          email: this.email,
          age: this.age
        };
        const res = await fetch(this.url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData)
        });
        console.log(res);
        this.$router.push("/");
      }
    },
    async deleteMember() {
      if (this.readyToDelete) {
        console.log("Delete Member Method");
        await fetch(this.url, {
          method: "DELETE"
        });
        this.$router.push("/");
      }
    }
  },
  async mounted() {
    console.log(this.url);
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(data);
    this.name = data.name;
    this.email = data.email;
    this.age = data.age;
  }
};
</script>

<style scoped>
.modal {
  background-size: 100%;
  width: 100%;
  height: 100vh;
  text-align: right;
}
.submit {
  background-color: #2ecc40;
  padding: 10px 15px 10px 15px;
  margin-right: 10px;
  color: white;
}
.delete {
  background-color: #ff4136;
  padding: 10px 15px 10px 15px;
  color: white;
}
.material-icons {
  color: black;
  font-size: 50px;
  margin-top: 10px;
  margin-right: 30px;
  cursor: pointer;
}
.confirm {
  margin-top: 20px;
}
</style>