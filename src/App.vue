<script setup>
import { ref, reactive } from 'vue';
import ListRendering from './components/listRendering.vue';
import GetDataFromParentComponent from './components/getDataFromParentComponent.vue';
import PassingPross from './components/PassingPross.vue';
import PassingEmits from './components/PassingEmits.vue';
import SlotCom from './components/SlotCom.vue';

/**
 * Pass data to the child component
 */
const todoLists = reactive([
  { id: 0, title: "Vagetal" },
  { id: 1, title: "Banana" },
  { id: 2, title: "Apple" }
])

/**
 * @link https://vuejs.org/guide/essentials/component-basics.html#passing-props
 * #Passing Props
 * 
 */
//PassingProps from parent component to child component
const props = reactive([
  { id: 1, name: "abdur rahim" },
  { id: 2, name: "safuwan ahammed" },
  { id: 3, name: "rajuwan ahammed" }
])

//Passing Emits from parent component to child component
const emits = reactive([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" }
])
const textFontSize = ref(1)


/**
 * Case Insensitivity
HTML tags and attribute names are case-insensitive, so browsers will interpret any uppercase characters as lowercase. That means when you’re using in-DOM templates, PascalCase component names and camelCased prop names or v-on event names all need to use their kebab-cased (hyphen-delimited) equivalents:
 */
// camelCase in JavaScript
// const BlogPost = {
//   props: ['postTitle'],
//   emits: ['updatePost'],
//   template: `
//     <h3>{{ postTitle }}</h3>
//   `
// }
// <!-- kebab-case in HTML -->
// <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

/**
 * restcounties lsit fetch and manage them
 */
// import { WatchEffect } from 'vue';
// const url="https://restcountries.com/v3.1/all?fields=name,capital"
// watchEffect(async ()=>{
// const res = await fetch(url)
// const data = await (res.json())
// })
// console.log(countriesList)
// const allCountries = reactive([
//   {name:"Bangladesh", capital:"Dhaka"}
// ])
// allCountries.values = data;

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">

  <ListRendering />


  <h5 v-show="false">v show text</h5>

  <span v-for="item in 10">
    <h1 v-if="item % 2 == 0"> {{ item }}</h1>
  </span>

  <ol>

    <GetDataFromParentComponent v-for="item in todoLists" :todo="item" :key="item.id">
    </GetDataFromParentComponent>
  </ol>

  <!-- defineProps -->
  <section>
    <PassingPross v-for="(passingProp, index) in passingProps" :key="index" :name="passingProp.name" />


  </section>

  <!-- define Emeits  -->
  <div :style="{ fontSize: textFontSize + 'em' }">
    <PassingEmits v-for="(passingEmit, index) in passingEmits" :key="index" :name="tr54dex.name"
      @enlarge-text="textFontSize += 0.1" />

  </div>

  <!-- define slot -->
  <SlotCom>
    Something Wrong here
  </SlotCom>
</template>



<style scoped></style>
