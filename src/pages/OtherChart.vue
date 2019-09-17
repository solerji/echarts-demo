<template>
<div class="otherChart">
  <otherChartDemo></otherChartDemo>
</div>
</template>

<script>
import otherChartDemo from '../components/otherChart/index'
export default {
  name: 'otherChart',
  data () {
    return {
      otherChartDemo: 'otherChartDemo'
    }
  },
  components: {
    otherChartDemo
  }
}
</script>

<style scoped>
</style>
