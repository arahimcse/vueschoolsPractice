<script setup>
import { ref, reactive } from 'vue';
import PassingPross from './components/PassingPross.vue';
import PassingEmits from './components/PassingEmits.vue';
import SlotCom from './components/SlotCom.vue';

/**
 * @link https://vuejs.org/guide/essentials/component-basics.html#passing-props
 * #Passing Props
 * If we are building a blog, we will likely need a component representing a blog post. We want all the blog posts to share the same visual layout, but with different content (Props send data from parent component to child component) 
 */
//PassingProps from parent component to child component
const props = reactive([
  { id: 1, name: "abdur rahim" },
  { id: 2, name: "safuwan ahammed" },
  { id: 3, name: "rajuwan ahammed" }
])

/**
 * link@ https://vuejs.org/guide/essentials/component-basics.html#listening-to-events
 * #Listening to Events
 * As we develop our <BlogPost> component, some features may require communicating back up to the parent. For example, we may decideto include an accessibility feature to enlarge the text of blog posts, while leaving the rest of the page at its default size.
 * 
 */
const emits = reactive([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" }
])
const textFontSize = ref(1)

</script>

<template>
  <!-- defineProps -->
  <section>
    <PassingPross v-for="(prop, index) in props" :key="index" :name="prop.name" />
  </section>

  <!-- define Emeits  -->
  <section>
    <div :style="{ fontSize: textFontSize + 'em' }">
      <PassingEmits v-for="(emit, index) in emits" :key="index" :name="emit.name" @enlarge-text="textFontSize += 0.1" />
    </div>
  </section>

  <!-- define slot -->
  <SlotCom>
    Something Wrong here
  </SlotCom>
</template>

<style scoped></style>
