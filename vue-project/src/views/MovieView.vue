<script setup>
import { ref, onMounted } from "vue";
const products = ref([]);
onMounted(async () => {
  const res = await fetch("http://localhost:3000/movies");
  products.value = await res.json();
});
import MovieCard from "../components/MovieCard.vue";
</script>

<template>
  <main>
    <div class="w-4/5 mx-auto">
      <MovieCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </main>
</template>

<style scoped></style>
