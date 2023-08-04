<script setup>
import { ref, computed } from 'vue';
const search = ref('')
import { countries } from '../../data/countries'
const getCountries = computed(()=>{
    return  countries.filter((country)=>{ return country.name.toLowerCase().startsWith(search.value.toLowerCase())})
})

</script>

<template>
    <div class="container w-5/6 mx-auto">
        <h1 class=" my-2 text-3xl text-purple-700 text-center" >country list with effective searching </h1>
        <div class=" search"> 
            <label for="search">Search</label>
            <input id="search" type="text" class=" input-text ml-1" v-model="search">
        </div>

        <div>
            <ul class="flex flex-col">
                <li v-for="country in getCountries" :key="country.name"><span class=" text-red-800">{{ search }}</span>{{ country.name.toLowerCase().replace(search, '') }}</li>
            </ul>
        </div>
    </div>

</template>

<style  scoped>
    
</style>
