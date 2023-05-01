<template>
    <div class="container">
      <h1>Number of Deaths Between Males and Females</h1>
      <select id="filterSelect" @click="filterSelect">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

    </div>
  </template>

<script>
import PieChart from '../components/PieChart.vue'
</script>
