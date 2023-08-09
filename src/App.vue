<script setup>
/**
 * link@ https://vuejs.org/guide/essentials/event-handling.html
 * #Event Handling
 * 
 */
import CallingMethodinLineHandler from './components/callingMethodinLineHandler.vue';
import accessingEventArgumentInLineHandler from './components/accessingEventArgumentInLineHandler.vue';
import inlineHandler from './components/inlineHandler.vue'
import methodHandler from './components/methodHandler.vue'
import EventModifier from './components/EventModifier.vue';
import KeyModifier from './components/KeyModifier.vue';

</script>

<template>
<inlineHandler/>

<methodHandler/>

<h1>Calling Methods in Inline Handlers</h1>
<CallingMethodinLineHandler/>

<h1>Accessing Event Argument in Inline Handlers</h1>
<accessingEventArgumentInLineHandler/>

<h1>Event Modifier</h1>
<EventModifier/>


<h1>Key Modifier</h1>
<KeyModifier/>
</template>

<style scoped>

</style>
