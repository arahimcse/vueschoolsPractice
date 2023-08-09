<script setup>
import {ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
const data = ref()
const route = useRoute()
watchEffect(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)
    data.value = await res.json()
})
</script>

<template>
    <div class="container w-5/6 mx-auto">
        <p>{{ data.id }}</p>
        <p>{{ data.title }}</p>
        <P><img :src="data.url" alt="data.title"></P>
    </div>
</template>

<style scoped>
    
</style>
