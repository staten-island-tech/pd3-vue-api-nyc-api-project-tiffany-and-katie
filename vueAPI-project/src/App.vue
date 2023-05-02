<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/BarView">Bar View</RouterLink>
  <RouterLink to="/PieView">Pie View</RouterLink>
  <RouterView />
</template>

<style scoped>
</style>
