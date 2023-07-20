<script setup>
function warn(message, event) {
  // now we have access to the native event
  console.log(event)
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
<!-- using $event special variable -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

</template>

<style>

</style>