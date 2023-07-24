<script setup>
defineProps({
    todo: Object
})
</script>

<template>
    <li>{{ todo.title }}</li>
</template>

<style scoped>

</style>