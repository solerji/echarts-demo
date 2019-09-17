<template>
<div class="barChart">
  <div class="barChart_main">
    <div class="duidieBar_main_chart" id="DuidieBar"></div>
    <div class="zhengfuBar_main_chart" id="ZhengfuBar"></div>
    <div class="dynamicBar_main_chart" id="DynamicBar"></div>
    <div class="jizuobiaoBar_main_chart" id="JizuobiaoBar"></div>
    <div class="mixedLineAndBar_main_chart" id="MixedLineAndBar"></div>
    <div class="caibaoBar_main_chart" id="CaibaoBar"></div>
  </div>
   <div class="barChart_button">
    <button class="button" @click="getLine">返回折线图</button>
    <button class="button" @click="getPie">去往饼图</button>
  </div>
</div>
</template>

<script>
import { initduidieBarChart } from '@/utils/barChart/duidieBar.js'
import { initzhengfuBarChart } from '@/utils/barChart/zhengfuBar.js'
import { initdynamicBarChart } from '@/utils/barChart/dynamicBar.js'
import { initmixedLineAndBarChart } from '@/utils/barChart/mixedLineAndBar.js'
export default {
  name: 'index',
  data () {
    return {
      dynamicBarData: [],
      dynamicBarCount: 11
    }
  },
  mounted () {
    initduidieBarChart('DuidieBar')
    initzhengfuBarChart('ZhengfuBar')
    initdynamicBarChart('DynamicBar')
    initmixedLineAndBarChart('MixedLineAndBar')
  },
  methods: {
    getPie: function () {
      let vue = this
      vue.$router.push('/PieChart')
    },
    getLine: function () {
      let vue = this
      vue.$router.push('/')
    }
  }
}
</script>

<style scoped>
.barChart_main {
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(auto-fill, auto-fill);
}
.duidieBar_main_chart, .zhengfuBar_main_chart, .dynamicBar_main_chart {
  height: 300px;
  width: 300px;
}
.mixedLineAndBar_main_chart {
  height: 400px;
  width: 500px;
}
.button {
  margin-left: 90%
}
</style>
