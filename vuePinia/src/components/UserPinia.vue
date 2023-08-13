<!-- Components name always PascalCase. Example: UsedPinia.vue -->
<script setup>
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
</script>

<template>
    <h3>Count: {{ userStore.count }} , Double count (by getters) : {{ userStore.doubleCount }}, Forth Count(by getters and actions): {{ userStore.forthCount() }} </h3>
    <button @click="userStore.increment()">Increment</button>
</template>

<style scoped>
    
</style>
