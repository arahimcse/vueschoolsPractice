<script setup>
import { ref,reactive } from 'vue';

const location = reactive({
  name:"Dhaka",
  weather:"Sunny"
})

const changelocation =(newLocation) => location.name = newLocation

</script>

<template>
  <div class="container mb-5">
    <div class="row">
      <h1>Events & Reactivity in Vue.js</h1>
    </div>
  </div>
    <div class="container">
    <button type="button" @click="changelocation('Dhaka')" class="btn btn-primary m-2">Dhaka</button>
    <button type="button" @click="changelocation('Rajshahi')" class="btn btn-primary m-2">Rajshahi</button>
    <button type="button" @click="changelocation('Khulna')" class="btn btn-primary m-2">Khulna</button>
  </div>
  <div class="container mt-5">
    <div class="row">
        <p  >Current Location <strong>{{ location.name }}</strong></p>
    </div>
  </div>
</template>

<style scoped>

</style>