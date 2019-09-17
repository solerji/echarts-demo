<template>
<div class="PieChart">
   <pieChartDemo></pieChartDemo>
</div>
</template>

<script>
import pieChartDemo from '../components/pieChart/index'
export default {
  name: 'PieChart',
  data () {
    return {
      pieChartDemo: 'pieChartDemo'
    }
  },
  components: {
    pieChartDemo
  }
}
</script>

<style scoped>
</style>
