<script setup>
/**
 * link@ https://vuejs.org/guide/essentials/component-basics.html#content-distribution-with-slots
 * #Content Distribution with Slots
 * Just like with HTML elements, it's often useful to be able to pass content to a component
 */
</script>

<template>
   <div class="alert-text">
      <strong class=" colo">Error</strong>
      <br />
      <slot />
   </div>
</template>

<style scoped>
.alert-box {
  color: #666;
  border: 1px solid red;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}
  
strong {
	color: red;    
}
</style>