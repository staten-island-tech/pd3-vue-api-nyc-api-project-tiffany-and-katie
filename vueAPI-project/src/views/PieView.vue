<template>
    <div class="container">
      <h1>Leading Causes of Deaths Through years</h1>
      <select id="filterSelect" @click="filterSelect">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

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
  }
}
</script>
