<template>
  <div class="home">
    <h2>All Member</h2>
  </div>
  <div v-if="members.length == 0">
    <p>Doesn't have Member</p>
  </div>
  <table class="all-member" v-else>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
    <single-member
      class="singleMember"
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
    SingleMember,
  },
  data() {
    return {
      members: [],
    };
  },
  methods: {},
  async mounted() {
    const res = await fetch("http://localhost:3000/members");
    const data = await res.json();
    this.members = data;
  },
};
</script>

<style scoped >
.home {
  margin-top: 2%;
}
.all-member {
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 55px -24px rgba(0, 0, 0, 0.75);
}
.all-member th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #2a9134;
  color: white;
}
h2 {
  text-align: center;
  color: green;
  text-shadow: 1px 1px 0px rgb(0, 0, 0);
  font-size: 50px;
}
p {
  text-align: center;
  padding-top: 10%;
  font-size: 35px;
  font-weight: bold;
  color: #2a9134;
}
.singleMember {
  cursor: pointer;
}
.singleMember:hover {
  background-color: #e8e8e4;
}
</style>
