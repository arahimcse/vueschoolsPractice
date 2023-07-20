<script setup>
import {reactive, ref} from 'vue'
const header = ref('Shopping list app')
const items = reactive([
    {id:1, label: '20 couple tablet'},
    {id:2, label: '34 rapid tablet'},
    {id:3, label: '50 napa tablet'}
])
</script>

<template>
    <h1>{{ header }}</h1>
    <ul>
        <li v-for="({id, label}, index) in items">index: {{ index }}, id: {{ id }}, label: {{ label }}</li>
    </ul>
</template>

<style scoped>
 ul{
    list-style-type: none;
 }
</style>