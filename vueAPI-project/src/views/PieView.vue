<template>
    <div class="container">
      <h1>Leading Causes of Deaths Through years</h1>
      <select id="filterSelect" @click="filterSelect">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div class="piechart">
        <PieChart v-if="loaded" :chartData="chartData" :chartOptions="chartOptions"/>
      </div>
    </div>
  </template>

<script>
import PieChart from '../components/PieChart.vue';

export default {
  name: 'PieView',
  components: { PieChart},
  data() {
    return {
      loaded: false,
      chartData: {
        labels:[],
        datasets: []
      },
      chartOptions: {}
    }
  },
  methods: {
    async allSelect() {
      try{
        const response = await fetch (
          'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
        )
        const diseasedata = await response.json()
        let labels = [
          "Alzheimer's Disease",
          "Viral Hepatitis",
          "Septicemia",
          "Influenza",
          "Chronic Lower Respiratory Diseases",
          "Diabetes Mellitus",
          "Malignant Neoplasms",
          "Diseases of Heart",
          "Assault",
          "Other Causes",
        ]
        let disease = []
        let backgroundColor = [
          '#812f42',
          '#765050',
          '#7e5d5e',
          '#ffc0cb',
          '#8B0000',
          '#7f00ff',
          '#99ffcc',
          '#ccffe5',
          '#ffff99',
          '#ffcce5',
        ]
        labels.forEach((label) => {
          disease.push(diseasedata.filter((rest) => rest.leading_cause == label).length)
        })
        this.chartData = {
          labels : labels,
          datasets: [
            {
              data: disease,
              backgroundColor: backgroundColor
            }
          ]
        }
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    },
    }
  }
</script>
