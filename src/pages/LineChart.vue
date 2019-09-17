<template>
<div class="LineChart">
    <div class="line_chart_demo">
      <lineChartDemo></lineChartDemo>
    </div>
</div>
</template>

<script>
import lineChartDemo from '../components/lineChart/index'
export default {
  name: 'LineChart',
  data () {
    return {
      lineChartDemo: 'lineChartDemo'
    }
  },
  components: {
    lineChartDemo
  }
}
</script>

<style scoped>
</style>
