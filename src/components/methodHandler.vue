<script setup>
import { ref } from 'vue';
const name = ref('vue.js');

const greet = (event) => {
    alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

</script>

<template>

<button @click="greet">Greet</button>

</template>

<style scoped>


</style>