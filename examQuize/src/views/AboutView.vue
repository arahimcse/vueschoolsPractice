<script setup>
import WelcomeItem from '../components/WelcomeItem.vue';



</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
<WelcomeItem>this is our welcome content place by slot tag</WelcomeItem>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
