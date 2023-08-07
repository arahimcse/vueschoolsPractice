<script setup>
import { ref, computed } from 'vue'
defineProps(["questions", "questionsCount", "correctAnswer"])
const emit = defineEmits(["answer-processed"])
function isCorrectCheck(x) {
    emit("answer-processed", x) //answer-processed is a function name and x is value passed as a argument
}
const viewResults = ref(false)
const startExam = ref(false)
const exbtn = ref(true)
function isExamStart() {
    exbtn.value = false
    startExam.value = true
}

//result btn manage
const rebtn = ref(true)
const resultShow = ref(false)

function resulShow()
{
    resultShow.value = true
    rebtn.value = false
}
</script>


<template>
    <template v-if="startExam">
        <div class="answer-count">
            <p>Question no. {{ questionsCount }} out of {{ questions.length }}</p>
            <div class="single-questions" v-for="(question, id) in questions" :key="question.q"
                v-show="questionsCount === id">
                {{ question.q }}
                <div class="answer-options" v-for="(answer, ind) in question.answer" :key="ind"
                    @click.prevent="isCorrectCheck(answer.isCorrect)">
                    {{ answer.text }}
                </div>
            </div>
        </div>
    </template>
    <button @click="resulShow" v-if="questionsCount == questions.length && rebtn">View Results</button>
    <p v-show="resultShow">Total Number of Correct Answer {{ correctAnswer }} and percentage of marks {{
        (correctAnswer / questions.length) * 100 }}%</p>
    <button v-show="exbtn" @click.prevent="isExamStart">Start Exam</button>
</template>