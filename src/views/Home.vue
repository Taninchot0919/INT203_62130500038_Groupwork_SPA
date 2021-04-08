<template>
  <h2>All Member</h2>
  <div class="home">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
    <tr v-for="member in members" :key="member.id" @click="test(member)">
      <td>{{ member.name }}</td>
      <td>{{ member.email }}</td>
      <td>{{ member.age }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      members: []
    };
  },
  methods: {
    test(object) {
      console.log(object.id);
      this.$emit("toggleModal", object);
    }
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/members");
    const data = await res.json();
    this.members = data;
    console.log(this.members);
  }
};
</script>

<style scoped>
.home {
  border-collapse: collapse;
  margin-left: 34%;
}
.home th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4caf50;
  color: white;
}
.home td,
.home th {
  border: 0.5px solid #ddd;
  padding: 15px;
  text-align: left;
}
</style>
