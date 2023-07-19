<script setup>
import { ref } from 'vue';
import ListRendering from './components/listRendering.vue';
const msg = ref("Hello World")

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">

  <ListRendering/>


  <h5 v-show="false">v show text</h5>
</template>

<style scoped>

</style>
