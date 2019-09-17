<template>
<div class="MapChart">
  <mapChartDemo></mapChartDemo>
</div>
</template>

<script>
import mapChartDemo from '../components/mapChart/index'
export default {
  name: 'MapChart',
  data () {
    return {
      mapChartDemo: 'mapChartDemo'
    }
  },
  components: {
    mapChartDemo
  }
}
</script>

<style scoped>
</style>
