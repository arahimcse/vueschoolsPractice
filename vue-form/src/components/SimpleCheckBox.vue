<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>

<template>
  <div class="container w-5/6 mx-auto flex flex-col">
    <h2 class="my-5">vue Checkbox</h2>
    <p class="mb-10">
      <span class="mr-10">Image On or Off Checked Box </span>
      <input class="mr-5" type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </p>

    <p>
      <input
        class="mr-5"
        type="radio"
        id="checkbox"
        :value="true"
        v-model="checked"
      />
      <label for="checkbox">On</label>
    </p>
    <p>
      <input
        class="mr-5"
        type="radio"
        id="checkbox"
        :value="false"
        v-model="checked"
      />
      <label for="checkbox">Off</label>
    </p>

    <p class="flex justify-center" v-show="checked">
      <img src="https://source.unsplash.com/random" alt="" />
    </p>
  </div>
</template>

<style scoped></style>
