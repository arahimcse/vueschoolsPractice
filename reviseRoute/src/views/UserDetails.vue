<script  setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>

<template>
    <h2>Hello ggg</h2>
    <RouterLink :to="{name: 'userDetails', params:{id:route.params.id, user:route.params.user}}">{{  route.params.id }}</RouterLink>
</template>

<style  scoped>
    
</style>
