<script setup>
/**
 * link@ https://vuejs.org/guide/essentials/event-handling.html#inline-handlers
 */
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
    <button @click="counter++">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
</template>

<style scoped></style>
