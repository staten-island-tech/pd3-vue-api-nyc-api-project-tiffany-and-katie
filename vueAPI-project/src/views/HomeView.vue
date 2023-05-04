<template>
  <div class="information">
    <h1>Sex: {{ sex }}</h1>
    <h2>Year: {{ year }}</h2>
    <h3>Leading Cause: {{ leading_cause }}</h3>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import infoCard from '../components/DataInfo.vue';
const info = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  info.value=data.results
  info.value = data.filter((rest) => rest.race_ethnicity != undefined)
}
onMounted(() =>{
  getData()
})
>>>>>>> 4ca6328b1d010e2eb47a2b85e43ffa8c489ea947
</script>

<style lang="scss" scoped>

</style>