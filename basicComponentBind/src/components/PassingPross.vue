<script setup>
/**
 * link@ https://vuejs.org/guide/essentials/component-basics.html#passing-props
 * 
 */
defineProps(['name'])
</script>

<template>
    <h3>{{ name }}</h3>
</template>

<style scoped></style>