<template>
  <h2>All Member</h2>
  <table class="all-member">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
    <single-member
      v-for="member in members"
      :key="member.id"
      :member="member"
    />
  </table>
</template>

<script>
import SingleMember from "../components/SingleMember.vue";
export default {
  name: "Home",
  components: {
    SingleMember
  },
  data() {
    return {
      members: []
    };
  },
  methods: {
    
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
.all-member {
  border-collapse: collapse;
  margin-left: 34%;
}
.all-member th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4caf50;
  color: white;
}
h2 {
  text-align: center;
}
</style>
