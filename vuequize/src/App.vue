<script setup>
import { ref, reactive } from 'vue'
import QuectionAnswer from './components/QuectionAnswer.vue'
const questionsCount = ref(0)
const correctAnswerCount = ref(0)
const questions = reactive([
  {
    q: "who is the father of bangladesh?",
    answer: [
      {
        text: "Joynal Abedin",
        isCorrect: false
      },
      {
        text: "Mawlana Abdul Hamid Khan Bhashani",
        isCorrect: false
      },
      {
        text: "Bangobandu Sheikh Mujibur Rahman",
        isCorrect: true
      },
      {
        text: "She-ra-Bangla A.K Fazlul Haque",
        isCorrect: false
      }
    ]
  },
  {
    q: "When Bangladesh gain freedom?",
    answer: [
      {
        text: '1971',
        isCorrect: true
      },
      {
        text: '1972',
        isCorrect: false
      },
      {
        text: '1973',
        isCorrect: false
      },
      {
        text: '1974',
        isCorrect: false
      }
    ]
  },
  {
    q: "When bord Bangubondu Sheikh Mujibur Rahman?",
    answer: [
      {
        text: '1916',
        isCorrect: false
      },
      {
        text: '1920',
        isCorrect: true
      },
      {
        text: '1925',
        isCorrect: false
      },
      {
        text: '1934',
        isCorrect: false
      }
    ]
  },
  {
    q: "National Day of Bangladesh?",
    answer: [
      {
        text: '26th march',
        isCorrect: true
      },
      {
        text: '16th December',
        isCorrect: false
      },
      {
        text: '10th january',
        isCorrect: false
      },
      {
        text: '23th march',
        isCorrect: false
      }
    ]
  }
])

const answerProcessed = (x) => {
  if (x) {
    correctAnswerCount.value++
  }
  questionsCount.value++
}
</script>

<template>
  <div class="container">
    <h1>Online Exam Quize</h1>

    <QuectionAnswer :questionsCount="questionsCount" :questions="questions" @answer-processed="answerProcessed"
      :correctAnswer="correctAnswerCount" />
  </div>
</template>