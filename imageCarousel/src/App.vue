<script setup>
import {ref, onMounted, nextTick } from 'vue'
const items = ref([
  '//images.unsplash.com/photo-1616879577377-ca82803b8c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  '//images.unsplash.com/photo-1618059485046-161ace8b928d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  '//images.unsplash.com/photo-1582913092250-644619cb5056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
  '//images.unsplash.com/photo-1518705130527-a85ab6d25e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
])

// watchEffect(async ()=>{
//   const res = await fetch("http://jsonplaceholder.typicode.com/photos")
//   items.value = await res.json()
// })
let flkty = null
onMounted(()=>{
  flkty = new Flickity('#carousel',{cellAlign: 'left',
  contain: true, autoPlay: true});
})

</script>

<template>
  <div class=" mx-auto item" id="carousel">
    <img v-for="(item, index) in items" :src="item" alt="item" :key="index" class="carousel-cell" >
</div>
</template>

<style  scoped>

  .carousel-cell {
  width: 100%; /* full width */
  height: 400px; /* height of carousel */
  margin-right: 10px;
}
</style>
