<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/common/Navbar.vue";
import SiteFooter from "./components/common/SiteFooter.vue";
</script>

<template>
  <Navbar />
  <!-- Routing page place here  -->
  <RouterView />
  <SiteFooter />
</template>

<style scoped></style>
