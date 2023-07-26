<script setup>
import { ref, reactive, watchEffect } from 'vue';
const countries = ref(null)
const countryLists = reactive([])
watchEffect(async () => {
  const url = "https://restcountries.com/v3.1/all?fields=name,capital"
  countries.value = await (await fetch(url)).json()
})

let q = ref('')
const getCountriesStartWithLetterB = (target) => {
  return countries.value.filter(item => {
    if ((target.length === 1) && item.name.common[0].toLowerCase() === target.toLowerCase()) {
      return item
    }

    if ((target.length > 1) && item.name.common.toLowerCase().includes(target)) {
      return item
    }

    if ((target.length === 0)) {
      return item
    }

  })
}
</script>

<template>
   <h1>List of Countrie and Capital</h1>
   <input v-model="q" placeholder="Search you respected country">
  <h5 v-if="getCountriesStartWithLetterB(q).length" v-for="{name, capital} in getCountriesStartWithLetterB(q)" :key="name.common" >{{ name.common }} = {{ capital[0] }}</h5>
  <h3>Total Countries = {{ getCountriesStartWithLetterB(q).length }}</h3>
</template>

<style scoped>

</style>
