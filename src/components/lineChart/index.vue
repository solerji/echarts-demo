<template>
<div class="lineChart">
  <div class="lineChart_main">
    <div class="stackedLine_main_chart" id="StackedLine"></div>
    <div class="stackedArea_main_chart" id="StackedArea"></div>
    <div class="stepLine_main_chart" id="StepLine"></div>
    <div class="gradientLine_main_chart" id="GradientLine"></div>
    <div class="shareDataset_main_chart" id="ShareDataset"></div>
    <div class="AQI_main_chart" id="AQI"></div>
  </div>
   <div class="lineChart_button">
    <button class="button" @click="getBar">去往柱状图</button>
  </div>
</div>
</template>

<script>
import { initStackedLineChart } from '@/utils/lineChart/StackedLine.js'
import { initStackedAreaChart } from '@/utils/lineChart/StackedArea.js'
import { initStepLineChart } from '@/utils/lineChart/StepLine.js'
import { initGradientLineChart } from '@/utils/lineChart/GradientLine.js'
import { initShareDatasetChart } from '@/utils/lineChart/ShareDataset.js'
export default {
  name: 'index',
  data () {
    return {
      // GradientData: [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73], ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245], ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111], ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128], ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106], ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73], ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107], ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106], ['2000-07-08', 107], ['2000-07-09', 66],
      //   ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64], ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83], ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]],
      GradientDateList: ['2000-06-05', '2000-06-06', '2000-06-07', '2000-06-08', '2000-06-09'],
      GradientValueList: [116, 129, 135, 86, 73]

    }
  },
  mounted () {
    initStackedLineChart('StackedLine')
    initStackedAreaChart('StackedArea')
    initStepLineChart('StepLine')
    initGradientLineChart('GradientLine', this.GradientDateList, this.GradientValueList)
    initShareDatasetChart('ShareDataset')
  },
  methods: {
    getBar: function () {
      let vue = this
      vue.$router.push('/BarChart')
    }
  }
}
</script>

<style scoped>
.lineChart_main {
  display: grid;
  grid-row-gap: 5rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(auto-fill, auto-fill);
}
.gradientLine_main_chart, .shareDataset_main_chart {
  height: 400px;
  width: 500px;
}
.stackedLine_main_chart, .stackedArea_main_chart, .stepLine_main_chart {
  height: 300px;
  width: 300px;
}
.button {
  margin-left: 90%
}
</style>
