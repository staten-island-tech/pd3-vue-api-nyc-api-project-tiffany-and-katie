<template>
  <h1 class="title">Deaths in Relation to Gender</h1>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const cause = ref('')
async function getData() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/jb7j-dtam.json?$select=leading_cause,year,sex,deaths'
  )
  let data = await res.json()
  cause.value = data
  console.log(data)
}

const loaded = ref(false)
const chartData = ref({
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: 'Gender',
      data: [],
      backgroundColor: ['#c8c8ff', '#ffb6c1'],
      borderWidth: 2
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  backgroundColor: ['#c8c8ff', '#ffb6c1'],
  borderWidth: 2
})
onMounted(async () => {
  try {
    await getData()
    const male = cause.value.filter((entry) => entry.sex === 'Male')
    const female = cause.value.filter((entry) => entry.sex === 'Female')
    chartData.value.datasets[0].data.push(male.length, female.length)
    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})
</script>
<style>
.title{
  font-size: 15px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
}
</style>
