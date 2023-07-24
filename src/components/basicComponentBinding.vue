<!-- Component Building Step -->

<script setup>
import { ref } from 'vue'
const count = ref(0)


/**
 * Component not building step
 * export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
 */

</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

