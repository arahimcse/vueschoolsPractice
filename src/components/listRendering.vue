<script setup>
import { reactive } from "vue";

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
    <ul>
  <li v-for="value in myObject" >
    {{ value }}
  </li>
</ul>

<ul>
  <template v-for="item in 5">
    <h1>rahim</h1>
    <p>{{ item }}</p>
  </template>
</ul>


</template>


