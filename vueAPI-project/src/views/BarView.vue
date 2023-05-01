<template>
    <div class="container">
      <h1>Main Causes of Death in NY</h1>
    </div>
  </template>

<script>
import BarChart from '../components/BarChart.vue';
</script>
<script
src="https://data.cityofnewyork.us/resource/jb7j-dtam.json">
<canvas id="myChart" style="width:100%;max-width:700px"></canvas>

const myChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: "leading_cause"
  ,
  dataset: [{
    data: "deaths",
  }]}
});
</script>