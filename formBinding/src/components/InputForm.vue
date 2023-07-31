<script setup>
import { ref } from 'vue';
const basicInput = ref('')
const multiInput = ref('')
const checkInput = ref(true)
</script>

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
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="checkInput">
        <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
            href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.  {{ checkInput }}</label>
</div>

</template>