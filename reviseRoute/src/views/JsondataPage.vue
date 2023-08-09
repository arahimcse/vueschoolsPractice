<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
const items = ref()
watchEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    items.value = await res.json();
})
</script>

<template>
    <div class="container w-5/6 mx-auto">
        <div v-for="item in items" :key="item.id" class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img :src="item.thumbnailUrl" :alt="item.title" /></figure>
            <div class="card-body">
                <h2 class="card-title">{{ item.title }}!</h2>
                <p>{{ item.title }}</p>
                <div class="card-actions justify-end">
                    <RouterLink class="btn btn-primary" :to="{name: 'jsondataDetails', params:{id:item.id}}">Details</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
