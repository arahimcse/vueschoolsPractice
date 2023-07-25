<script setup>
defineProps(["name"])
defineEmits(["enlarge-text"])
</script>

<template>
 <h3>{{ name }}</h3>
 <button @click="$emit('enlarge-text')">Enlarge Text</button>
</template>

<style scoped>

</style>