<script setup>
import Home from './components/Home.vue';
import Archive from './components/Archive.vue';
import Content from './components/Content.vue';
import { ref } from 'vue';
const CurrentTab = ref('Home')
const tabs = {
 Home,
 Archive,
 Content
}
</script>

<template>

  <button
  v-for="(_, tab) in tabs"
  :key="tab"
  :class="['tab-button', {active:currentTab===tab}]"
  @click="currentTab=tab"
  >{{ tab }}</button>
  <component :is="tabs[currentTab]"></component>

</template>

<style scoped>

</style>
