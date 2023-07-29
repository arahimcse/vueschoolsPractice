<script setup>
import MovieCard from '../components/MovieCard.vue'
import { ref, watchEffect } from 'vue'
const movies = ref(0)
const isLoad = ref()
watchEffect(async () => {
    try {
        const res = await fetch("http://localhost:3000/movies")
        if (res.ok) {
            movies.value = await (res).json()
            isLoad.value = true
        } else {
            isLoad.value = false
        }
    } catch (error) {
        console.error('Unexpected error ocuured in the app', error)
    }



})
console.log(movies)

</script>

<template>
    <h2 class=" text-3xl font-bold underline">this is movie card page</h2>
    <div v-if="isLoad" class="card-loaded">
        <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
    <div v-else class="card-loading">The card is loading</div>
    
</template>