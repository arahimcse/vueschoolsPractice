<script setup>
import { ref } from 'vue'
const checked = ref([])
</script>

<template>
    <div class="container w-5/6 mx-auto">
        <p>{{ checked }}</p>
        <input class="mr-4" type="checkbox" id="red" v-model="checked" value="red">
        <label  for="red">Red</label>

        <input class="mr-4" type="checkbox" id="green" v-model="checked" value="green">
        <label for="green">Green</label>
        
        <input class="mr-4" type="checkbox" id="blue" v-model="checked" value="blue">
        <label for="blue">Blue</label>
    </div>
</template>

<style scoped>
    
</style>
