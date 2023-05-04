<template>
      <h1 class="text">Deaths Each Year</h1>
      <div class="barChart">
      <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
      </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
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
  labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      label: 'Years',
      data: [],
      backgroundColor: ['#CBC3E3', '#6699CC', '#000099', '#000000', '#6699FF', '#CC6699'],
      borderWidth: 2
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  backgroundColor: ['#CBC3E3', '#6699CC', '#000099', '#000000', '#6699FF', '#CC6699'],
  borderWidth: 2
})
onMounted(async () => {
  try {
    await getData()
    const year14 = cause.value.filter((entry) => entry.year === '2014')
    const year15 = cause.value.filter((entry) => entry.year === '2015')
    const year16 = cause.value.filter((entry) => entry.year === '2016')
    const year17 = cause.value.filter((entry) => entry.year === '2017')
    const year18 = cause.value.filter((entry) => entry.year === '2018')
    const year19 = cause.value.filter((entry) => entry.year === '2019')
    chartData.value.datasets[0].data.push(year14.length, year15.length, year16.length, year17.length, year18.length, year19.length)
    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})
</script>
<style>
.text{
  font-size: 35px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  text-align: center;
}
</style>