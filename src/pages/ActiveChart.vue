<template>
<div class="ActiveChart">
    <activeChartDemo></activeChartDemo>
</div>
</template>

<script>
import activeChartDemo from '../components/activeChart/index'
export default {
  name: 'ActiveChart',
  data () {
    return {
      activeChartDemo: 'activeChartDemo'
    }
  },
  components: {
    activeChartDemo
  }
}
</script>

<style scoped>
</style>
