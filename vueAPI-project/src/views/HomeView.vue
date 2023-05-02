<template>
  <div class="card">
    <infoCard v-for="data in info"
    :key="data.sex"
    :sex="data.sex"
    :year="data.year"
    :leading_cause="data.leading_cause"/> 
  </div>
</template>

<script>
 import infoCard from '../components/DataInfo.vue';
 export default {
  name: "Home",
  components: {
    infoCard, 
  },
}
</script>

<style lang="scss" scoped>

</style>