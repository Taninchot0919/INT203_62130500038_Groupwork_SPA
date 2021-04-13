<template>
  <div class="not-found" v-if="checkMember.length == 0">
    <p>Not Found</p>
  </div>
  <div class="modal" v-else @submit.prevent="">
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
          v-model="readyToConfirm"
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
  name: "Modal",
  props: ["id"],
  data() {
    return {
      name: "",
      email: "",
      age: "",
      url: "http://localhost:3000/members/" + this.id,
      readyToConfirm: false,
      checkMember: [],
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    async editMember() {
      if (this.readyToConfirm) {
        let editData = {
          name: this.name,
          email: this.email,
          age: this.age,
        };
        await fetch(this.url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        });
        this.$router.push("/");
      }
    },
    async deleteMember() {
      if (this.readyToConfirm) {
        await fetch(this.url, {
          method: "DELETE",
        });
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    const res = await fetch(this.url);
    const data = await res.json();
    this.checkMember = data;
    this.name = data.name;
    this.email = data.email;
    this.age = data.age;
  },
};
</script>

<style scoped>
.modal {
  width: 100%;
  text-align: right;
}
.submit {
  background-color: #2a9134;
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
  margin-right: 5%;
  cursor: pointer;
}
.confirm {
  margin-top: 20px;
}
h2 {
  color: green;
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
</style>