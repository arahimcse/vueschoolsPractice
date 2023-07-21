<script setup>
import { ref } from 'vue';

const location = ref("Dhaka")

const changelocation =(newLocation) => location.value = newLocation

</script>

<template>
    <div class="container">
    <button type="button" @click="changelocation('Dhaka')" class="btn btn-primary m-2">Dhaka</button>
    <button type="button" @click="changelocation('Rajshahi')" class="btn btn-primary m-2">Rajshahi</button>
    <button type="button" @click="changelocation('Khulna')" class="btn btn-primary m-2">Khulna</button>
  </div>
  <div class="container">
    <div class="row">
        <p>{{ location }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>