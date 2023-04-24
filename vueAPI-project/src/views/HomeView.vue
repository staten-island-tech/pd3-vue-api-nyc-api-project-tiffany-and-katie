<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const sat = ref('')
async function getSat() {
  let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await res.json()
  sat.value.values=data.results
}
</script>

<style lang="scss" scoped>

</style>