<script setup>
/**
 * link@ https://router.vuejs.org/guide/advanced/composition-api.html#vue-router-and-the-composition-api
 * #Vue Router and the Composition API
 */
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
const route = useRoute();
const userData = ref();
onMounted(
  watchEffect(async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/movies/${parseInt(route.params.id)}`
      );
      if (true === res.ok) {
        userData.value = await res.json();
      } else {
        throw "Opp! internal  server error ";
      }
    } catch (error) {
      console.error(`404 Not found ${error}`);
    }
  })
);
</script>

<template>
  <section class="container mx-auto">
    <div class="w-4/5 mx-auto">
      <img :src="userData.thumbnail" :alt="userData.title" />
      <h1>Name: {{ userData.title }}</h1>
      <h1>Details: {{ userData.description }}</h1>
      <h1>
        <strong>Market Price: {{ userData.price }}</strong>
      </h1>
      <h1>
        <strong>Discount: {{ userData.discountPercentage }}%</strong>
      </h1>
      <h2>User Rating: {{ userData.rating }} out of 5</h2>
      <h3>In Stock: {{ userData.stock }}</h3>
      <h3>Brand: {{ userData.brand }}</h3>
      <h3>Device Type: {{ userData.category }}</h3>
      <img
        v-for="(image, index) in userData.images"
        :src="image"
        :alt="image"
        :key="index"
      />
    </div>
  </section>
</template>

<style scoped></style>
