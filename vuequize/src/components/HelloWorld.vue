<script setup>
import { reactive } from "vue";
const items = reactive([
  { name: "Abdur rahim", age: 32 },
  { name: "Abdul kadir", age: 35 },
  { name: "John Smith ", age: 33 },
]);
</script>

<template>
  <ul :style="{color:'red', fontSize:'16px'}">
    <li v-for="(item, index) in items" :key="index">{{ item.name }} is {{ item.age }} years old. </li>
  </ul>
</template>

<style scoped>
ul{list-style-type: none;}
</style>
