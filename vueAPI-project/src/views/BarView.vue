<template>
    <div class="container">
      <h1>Main Causes of Death in NY and its Relation to Sex</h1>
      <select id="filterSelect" @click="filterSelect">
      <option value="alzheimer">Alzheimer's Disease</option>
      <option value="hepatitis">Viral Hepatitis</option>
      <option value="septicemia">Septicemia</option>
      <option value="influenza">Influenza</option>
      <option value="respirtory">Chronic Lower Respiratory Diseases</option>
      <option value="diabetes">Diabetes Mellitus</option>
      <option value="neoplasms">Malignant Neoplasms</option>
      <option value="heart">Diseases of Heart</option>
      <option value="assault">Assault</option>
      <option value="other">Other Causes</option>
      </select>
      <div class="barChart">
      <BarChart v-if="loaded" :chartData="chartData" :chartOptions="chartOptions" />
      </div>
    </div>
  </template>

<script>
import BarChart from '../components/BarChart.vue';

export default {
  name: 'BarView',
  components: { BarChart},
  data() {
    return {
      loaded: false,
      chartData: {
        labels:[],
        datasets: []
      },
      chartOptions: {}
    }
  }
}
</script>
