<script setup>
import { ref, watchEffect } from 'vue'
const commits = ref(null)
watchEffect(async () => {
  const API_URL = `https://jsonplaceholder.typicode.com/posts`
  commits.value = await (await fetch(API_URL)).json()
})
const accordionIndex = ref(0)
</script>

<template>
     <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Events & Reactivity in Vue.js</h1>
    
        <div class="p-10 bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
          <div class="w-6/12 mx-auto rounded border">
            <div class="bg-white p-10 shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
              <p class="text-sm font-light text-gray-600 my-3">
                The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails
              </p>
    
              <div class="h-1 w-full mx-auto border-b my-5"></div>
    
              <!-- What is term -->
              <div class="transition hover:bg-indigo-50" v-for="({body, title}, index) in commits" :key="index">
                <!-- header -->
                <div @click="accordionIndex=index" class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                  <i class="fas" :class="(index == accordionIndex) ? 'fa-minus': 'fa-plus'" ></i>
                  <h3 :class="(index == accordionIndex) ? 'text-orange-700': ''" >{{ title.trim() }}</h3>
                </div>
                <!-- Content -->
                <div class="px-5 pt-0 text-left pb-5" v-show="index == accordionIndex">
                  <p class="leading-6 font-light pl-9 ">
                    {{ body.trim() }}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

</template>

<style scoped></style>
