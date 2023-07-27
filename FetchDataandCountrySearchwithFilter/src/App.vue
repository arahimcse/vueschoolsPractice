<script setup>
import CountryListwithFilter from './components/CountryListwithFilter.vue'
import LiveSearch from './components/LiveSearch.vue';
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

</script>

<template>
<!-- <CountryListwithFilter/> -->
<LiveSearch/>
</template>

<style scoped></style>
