<script setup>
import { ref, onMounted } from "vue";
let chart = null
const item = ref(16)
const dataset = [12, 19, 3, 5, 2, 3];
const data = {
  datasets: [
    {
      label: "My First Dataset",
      data: dataset,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
};

onMounted(() => {
  const ctx = document.getElementById("myChart");
  chart = new Chart(ctx, config);
});

function addItems()
{
  dataset.push(item.value) 
 chart.data.datasets[0].data = dataset
 chart.update()
}

</script>

<template>
  {{ item }}
  <p>
    <input type="number" v-model="item" > 
    <button @click="addItems()">add </button>
  </p>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<style scoped></style>
