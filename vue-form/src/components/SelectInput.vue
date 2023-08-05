<script setup>
import { ref, reactive } from 'vue'
const persons = reactive([
  { name: 'John Doe', age: 25, email: 'john@doe.com' },
  { name: 'Jane Doe', age: 26, email: 'jane@doe.com' },
  { name: 'John Smith', age: 27, email: 'john@smith.com' },
  { name: 'Jane Smith', age: 28, email: 'jane@smith.com' }
])

const activeIndex = ref(0)
</script>

<template>
  <!-- <section class="mx-auto container text-left">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="my-5">{{ persons }}</p>
    <div class="flex ">
      <div class="w-1/2">
        <p>{{ activeIndex }}</p>
        
        <p class="mb-10">
        <h2>Select a person</h2>
        <select name="person" id="person" v-model="activeIndex" >
          <option :value="index" v-for="(person, index) in persons" :key="index">{{person.name}}</option>
        </select>
        </p>
      </div>
      <div>
        <div class="flex flex-col">
          <input class=" my-3" type="text" :placeholder="value" v-model="persons[activeIndex][key]" v-for="(value, key, index2) in persons[activeIndex]" :key="key" >
        </div>
      </div>
    </div>

  </section> -->

<div class="container w-5/6 mx-auto">

    <p class="my-4"> {{  persons }}</p>

    <div class="row flex flex-row">
        <div class="select-area basis-1/2">
            <p class="my-4">Select Index {{ activeIndex }}</p>
            <select v-model="activeIndex">
                <option v-for="(person, index) in persons" :value="index" :key="index"> {{ person.name }}</option>
            </select>
        </div>
        <div class="input-area basis-1/2 flex flex-col">
            <input class="my-4" v-for="(value, key, index) in persons[activeIndex]" :type="('name' == key ) ? 'text': ('age' == key ) ? 'number': 'email' "  :placeholder="value" v-model="persons[activeIndex][key]"  >
        </div>
    </div>
</div>
</template>
<style scoped></style>
