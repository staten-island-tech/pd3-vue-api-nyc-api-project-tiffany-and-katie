<template>
  <div class="information">
    <h1>Sex: {{ sex }}</h1>
    <h2>Year: {{ year }}</h2>
    <h3>Leading Cause: {{ leading_cause }}</h3>
  </div>
</template>

<script>
async function res() {
  const data = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  const x = await response.json();
  console.log(x);
}


</script>

<style lang="scss" scoped>

</style>