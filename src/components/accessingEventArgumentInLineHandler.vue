<script setup>
/** 
 * link@ https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers 
 * #Accessing Event Argument in Inline Handlers
 */
function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
  <!-- using $event special variable (original DOM even)-->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
</template>

<style></style>