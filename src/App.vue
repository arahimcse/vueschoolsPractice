<script setup>
import { ref, reactive } from 'vue';
import ListRendering from './components/listRendering.vue';
import GetDataFromParentComponent from './components/getDataFromParentComponent.vue';
const msg = ref("Hello World")

/**
 * Pass data to the child component
 */
const todoLists = reactive([
  {id:0,title:"Vagetal"},
  {id:1,title:"Banana"},
  {id:2,title:"Apple"}
])

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">

  <ListRendering/>


  <h5 v-show="false">v show text</h5>

 <span v-for="item in 10">
  <h1 v-if="item%2==0"> {{ item  }}</h1>
 </span>
 
 <ol>

  <GetDataFromParentComponent
  v-for="item in todoLists"
  :todo="item"
  :key="item.id">
</GetDataFromParentComponent>
 </ol>

</template>



<style scoped>

</style>
