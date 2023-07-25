<script setup>
import { ref, reactive } from 'vue';
import ListRendering from './components/listRendering.vue';
import GetDataFromParentComponent from './components/getDataFromParentComponent.vue';
import PassingPross from './components/PassingPross.vue';
import PassingEmits from './components/PassingEmits.vue';
import SlotCom from './components/SlotCom.vue';
const msg = ref("Hello World")

/**
 * Pass data to the child component
 */
const todoLists = reactive([
  {id:0,title:"Vagetal"},
  {id:1,title:"Banana"},
  {id:2,title:"Apple"}
])

//PassingProps from parent component to child component
const passingProps = reactive([
  {id:1, name:"abdur rahim"},
  {id:2, name:"safuwan ahammed"},
  {id:3, name:"rajuwan ahammed"}
])

//Passing Emits from parent component to child component
const passingEmits = reactive([
  {id:1, name:"Item 1"},
  {id:2, name:"Item 2"},
  {id:3, name:"Item 3"}
])
const textFontSize = ref(1)
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

 <!-- defineProps -->
 <section>
   <PassingPross
   v-for="(passingProp, index) in passingProps"
   :key="index"
   :name="passingProp.name"
   />

  
 </section>

 <!-- define Emeits  -->
<div :style="{fontSize:textFontSize + 'em'}">
  <PassingEmits 
  v-for="(passingEmit, index) in passingEmits"
  :key="index"
  :name="passingEmit.name"
  @enlarge-text ="textFontSize += 0.1"
  />

</div>

<!-- define slot -->
<SlotCom>
  Something Wrong here
  </SlotCom>
  
</template>



<style scoped>

</style>
