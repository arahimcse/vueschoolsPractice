<script setup>
import { ref, reactive } from 'vue';
const lights = reactive([
    {
        title:"Light 1 ",
        on:"//img.icons8.com/?size=512&id=12244&format=png",
        off:"//img.icons8.com/?size=512&id=75&format=png",
        isOn: true
    },
    {
        title:"Light 2 ",
        on:"//img.icons8.com/?size=512&id=12244&format=png",
        off:"//img.icons8.com/?size=512&id=75&format=png",
        isOn: true
    },
    {
        title:"Light 3 ",
        on:"//img.icons8.com/?size=512&id=12244&format=png",
        off:"//img.icons8.com/?size=512&id=75&format=png",
        isOn: false
    }
])
const bgBlue = "bg-blue-700"
const bgGray = "bg-gray-700"
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Assignment</h1>
        <p class="p-5">Make These Buttons Work</p>
        <div class="flex justify-between space-x-6">
            <div class="p-10 border w-96 flex flex-col space-y-5">
                <button v-for="(light, index) in lights" :key="index" @click="light.isOn =!light.isOn" :class="light.isOn?bgBlue:bgGray" class="hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    {{ light.title }} {{ light.isOn?"On":"Off" }}
                </button>
            </div>
            <div class="p-10 border w-96 flex flex-col space-y-5">
                <img class="w-20" v-for="(light, index) in lights" :src="light.isOn?light.on:light.off"  :alt="light.title" :key="index">
            </div>
        </div>
    </section>
</template>

<style scoped></style>