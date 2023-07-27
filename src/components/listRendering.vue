<script setup>

/**
 * @link https://vuejs.org/guide/essentials/list.html
 * #List Rendering
 * In vue list rendering is loop that used in vue
 */
import { reactive } from "vue";
/**
 * JS object data (array, object, symbole, etc) handle by reactive in vue
 */

//object Data
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const myArray = reactive([
  'apple',
  'banana',
  'mango',
  'Lyche',
  'Water Malon'
])
</script>

<template>
  <div class="object-rendering">
    <h3>Object data rendering</h3>
    <ul>
      <li v-for="(value, index) in myObject" :key="index">
        {{ value }}
      </li>
    </ul>
  </div>

  <div class="array-rendering">
    <h3>Array data rendering</h3>
    <ul>
      <li v-for="(value, index) in myArray" :key="index">
        {{ value }}
      </li>
    </ul>
  </div>
</template>


<style scoped></style>