<script setup>
/** 
 * link@ https://vuejs.org/guide/essentials/event-handling.html#calling-methods-in-inline-handlers
 * #Calling Methods in Inline Handlers
 */
function say(message) {
  alert(message)
}

</script>

<template>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
</template>

<script setup>

</script>