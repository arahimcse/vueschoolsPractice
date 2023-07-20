<script setup>
import CallingMethodinLineHandler from './components/callingMethodinLineHandler.vue';
import accessingEventArgumentInLineHandler from './components/accessingEventArgumentInLineHandler.vue';
import inlineHandler from './components/inlineHandler.vue'
import methodHandler from './components/methodHandler.vue'


</script>

<template>
<inlineHandler/>

<methodHandler/>

<h1>Calling Methods in Inline Handlers</h1>
<CallingMethodinLineHandler/>

<h1>Accessing Event Argument in Inline Handlers</h1>
<accessingEventArgumentInLineHandler/>
</template>

<style scoped>

</style>
