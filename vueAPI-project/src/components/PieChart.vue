<template>
    <Pie id="PieChart" :options="chartOptions" :data="chartData" />
  </template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  ChartJS.register(ArcElement, Tooltip, Legend)
  export default {
    name: 'PieChart',
    components: {
      Pie
    },
    data() {
      return {
        chartData: {
            type: Object,
            required: true,
        },
        chartOptions: {
          type: Object,
          required: true,
          default: () => ({
          scales: {
          y: {
            responsive: true
          }
        },
      })
        }
      }
    }
  }
  </script>