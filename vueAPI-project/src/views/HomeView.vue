<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const sat = ref('')
async function getSat() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  sat.value=data.results
}
onMounted(() =>{
  getSat()
})
</script>

<style lang="scss" scoped>

</style>