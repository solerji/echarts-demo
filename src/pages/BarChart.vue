<template>
<div class="BarChart">
  <barChartDemo></barChartDemo>
</div>
</template>

<script>
import barChartDemo from '../components/barChart/index'
export default {
  name: 'BarChart',
  data () {
    return {
      barChartDemo: 'barChartDemo'
    }
  },
  components: {
    barChartDemo
  }
}
</script>

<style scoped>
</style>
