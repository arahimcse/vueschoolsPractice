<script  setup>
defineProps({
    user: Object
})
</script>
<template>
    <li>{{ user.name }}</li>
</template>
<style  scoped></style>
