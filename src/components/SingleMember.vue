<template>
  <tr @click="emitTableRow(member)">
    <td>{{ member.name }}</td>
    <td>{{ member.email }}</td>
    <td>{{ member.age }}</td>
  </tr>
</template>

<script>
export default {
  name: "SingleMember",
  props: ["member"],
  methods: {
    emitTableRow(member) {
      this.$router.push({ name: "Modal", params: { id: member.id } });
    },
  },
};
</script>

<style>
td {
  border: 0.5px solid #ddd;
  padding: 15px;
  text-align: left;
  text-decoration: none;
}
</style>