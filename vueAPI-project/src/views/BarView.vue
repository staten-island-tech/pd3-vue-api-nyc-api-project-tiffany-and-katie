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
  },
  methods: {
    allSelect: async function() {
      try{
        const response = await fetch (
          'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
        )
        const data = await response.json()
        let labels = ['female', 'male']
        let gender = []
        labels.forEach((label) => {
          gender.push(genderData.filter((rest) => rest.gender === label).length)
        })
        this.chartData = {
          labels: labels,
          datasets: [
            {
              data: gender,
              backgroundColor: '#8ffcce',
              label: 'Diseases'
            }
          ]
        }
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    },
    filterSelect: async function() {
      try{
        const select = document.getElementById('filterSelect').value
        if (select == 'All') {
          this.allSelect()
        } else {
          const response = await fetch(
            'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
          )
          const dataset = await response.json()
          let labels = ['female', 'male']
          let filtered= []
          labels.forEach((label) => {
            filtered.push(dataset.filter((rest) => rest.gender == label).length)
          })
          this.chartData = {
            labels: labels,
            dataset: [
              {
                data: filtered,
                backgroundColor: '#8eccff',
                label: 'Diseases'
            }
            ]
          }
          this.loaded = true
        }
      } catch(error){
        console.error(error)
      }
    },
  },
  async mounted(){
    this.allSelect()
  }
}
</script>
