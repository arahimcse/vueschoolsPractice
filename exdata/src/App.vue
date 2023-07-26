<script setup>
import { ref, reactive, watchEffect } from 'vue';
const countries = ref(null)
const countryLists = reactive([])
watchEffect(async () => {
  const url = "https://restcountries.com/v3.1/all?fields=name,capital"
  countries.value = await (await fetch(url)).json()
})

function getAllCountries(list = 'all')
{
  countryLists.length = 0
  if('all' == list)
  {
    countries.value.forEach(
      (country)=>{
        countryLists.push({
          name:country.name.common,
          capital:country.capital[0]
        })
      }
    )
  }else
  {
    countries.value.filter(c=>c.name.common.toLowerCase().startsWith(list)).forEach(
      (country)=>{
        countryLists.push({
          name:country.name.common,
          capital:country.capital[0]
        })
      }
    )
  }
}

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


</script>

<template>
  <h1>List of Countrie and Capital</h1>
  <button @click="getAllCountries('all')">All Coutries</button>
  <button @click="getAllCountries('c')">Countries Start with C</button>
  <button @click="getAllCountries('d')">Countries Start with D</button>
  <h5 v-for="{name, capital} in countryLists" >{{ name }} = {{ capital }}</h5>
</template>

<style scoped></style>
