<script setup>


/**
 * 
 * One of the most important topic for data bind @https://vuejs.org/guide/components/v-model.html#component-v-model
 */
import { ref } from 'vue';
const basicInput = ref('')
const multiInput = ref('')
const checkInput = ref(true)
const checkboxex = ref([])
const radioInput = ref()
const selectInput = ref()
const multipleSelect = ref([])
const selected = ref('A')
const options = ref([
    {text:"one", value:"A"},
    {text:"two", value:"B"},
    {text:"three", value:"C"}
])
</script>
let msg = ref('')
<template>
    <!-- #text input -->
    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ basicInput
        }}</label>
        <input type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John" v-model="basicInput">
    </div>

    <!-- Multiline text -->
    <p>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message {{ multiInput
        }}</label>
        <textarea id="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..." v-model="multiInput"></textarea>
    </p>
    <!-- input check box -->
    <div class="flex items-center">
        <input id="link-checkbox" type="checkbox" value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="checkInput">
        <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
                href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>. {{ checkInput
                }}</label>
    </div>

    <!-- Multiple checkboxes -->
    <p>

    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Multiple Checkboxes {{ checkboxex }}</h3>
    <ul
        class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input id="vue-checkbox" type="checkbox" value="Vue
                    JS"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    v-model="checkboxex">
                <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue
                    JS</label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input id="react-checkbox" type="checkbox" value="React"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    v-model="checkboxex">
                <label for="react-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input id="angular-checkbox" type="checkbox" value="Angular"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    v-model="checkboxex">
                <label for="angular-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input id="laravel-checkbox" type="checkbox" value="Laravel"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    v-model="checkboxex">
                <label for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
            </div>
        </li>
    </ul>

    </p>

    <!-- Radio input -->

    <p>

    <div class="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="one" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="radioInput">
        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ radioInput
        }}</label>
    </div>
    <div class="flex items-center">
        <input checked id="default-radio-2" type="radio" value="two" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="radioInput">
        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ radioInput
        }}</label>
    </div>
    </p>

    <!-- Select Single Element -->
    <p>
    <h6>{{ selectInput }}</h6>
    <select name="" id="" v-model="selectInput">
        <option disabled value="">Please select one</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    </p>

    <!-- Select Multiple element -->
    <p>
    <h6> {{ multipleSelect }}</h6>
    <select name="" id="" v-model="multipleSelect" multiple>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
    </select>
    </p>


<!-- create selected area from data list -->
<p>
    <select v-model="selected">
    <option v-for="option in options" :value="option.value" :key="option.text">{{ option.text }}</option>
    </select>
</p>



<!-- `picked` is a string "a" when checked -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` is either true or false -->
<input type="checkbox" v-model="toggle" />

<!-- `selected` is a string "abc" when the first option is selected -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>

<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />


  <input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />


  <input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />

<select v-model="selected">
  <!-- inline object literal -->
  <option :value="{ number: 123 }">123</option>
</select>
{{ msg }}
<input v-model="msg" /> 


</template>