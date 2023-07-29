<script setup>
defineProps({
    movie:Object
}
)
</script>

<template>
 <div class="card bg-green-600 w-80">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.year }}</p>
    <p>{{ movie.runtime }}</p>
 </div>
</template>