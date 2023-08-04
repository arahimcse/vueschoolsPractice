<script setup>
import { reactive } from 'vue'
const saarcCountries = reactive([
  { name: "Bangladesh", capital: "Dhaka" },
  { name: "Nepal", capital: "Kathmandu" },
  { name: "Bhutan", capital: "Thimphu" },
  { name: "Sri Lanka", capital: "Colombo" },
  { name: "India", capital: "New Delhi" },
  { name: "Pakistan", capital: "Islamabad" },
  { name: "Maldives", capital: "Male" }
])

const capitals = ["Dhaka", "Kathmandu", "Thimphu", "Colombo", "New Delhi", "Islamabad", "Male"]

function getScore()
{
    let score = 0;
    saarcCountries.forEach(country => {
        if(country.capital === country.answer)
        {
            score++
        }
    })
    return score
}
</script>

<template>


    <div class="container w-5/6 mx-auto text-left">
        <h1 class=" my-2">Quize</h1>
        <p>{{ saarcCountries }}</p>
        <h2 class=" my-2">Your Score: {{ getScore() }}</h2>
        <div class="my-2  p-5 border border-red-600" v-for="country in saarcCountries" :key="country.name">
            <p>What is the Capital of {{ country.name  }}</p>
            <template v-for="capital in capitals">
                <input class="ml-1 mr-2" type="radio" :name="country.name" :value="capital" :id="capital" v-model="country.answer">
                <label :for="capital" >{{ capital }}</label>
            </template>
        </div>
    </div>
  </template>

<style scoped></style>
