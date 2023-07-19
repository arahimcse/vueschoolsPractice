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

 <span v-for="item in 10">
  <h1 v-if="item%2==0"> {{ item  }}</h1>
 </span>
 

</template>



<style scoped>

</style>
