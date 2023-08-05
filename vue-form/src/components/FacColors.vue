<script setup>
import { ref } from 'vue'
const favColors = ref('green')
function colors()
{
    return `color:${favColors.value}`
}
</script>

<template>
    <input  type="text" v-model="favColors">
    <h2 :style="colors()">This is testing text</h2>
</template>

<style scoped>
    
</style>
