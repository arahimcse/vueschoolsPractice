<script setup>
import { ref } from 'vue';
import ListRendering from './components/listRendering.vue';
const msg = ref("Hello World")

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">

  <ListRendering/>
</template>

<style scoped>

</style>
