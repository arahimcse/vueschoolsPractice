<script setup>
const ifBoolean = true
const title = 'title'
</script>

<template v-if="ifBoolean">
    <h1>{{ title }}</h1>
    <p >paragraph 1</p>
    <p>paragraph 2</p>
</template>