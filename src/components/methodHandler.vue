<script setup>
/**
 * link@ https://vuejs.org/guide/essentials/event-handling.html#method-handlers
 */
import { ref } from 'vue'

const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
</script>

<template>
	<button @click="greet">Greet</button>
</template>