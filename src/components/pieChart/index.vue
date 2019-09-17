<template>
  <div class="pieChart">
    <div class="pieChart_main">
      <div class="customized_pie" id="Customized"></div>
      <div class="pie_with_scrollable_chart" id="pie_with_scrollable"></div>
      <div class="default_arrangement_chart" id="default_arrangement"></div>
    </div>
    <div class="pieChart_button">
      <button @click="getBar" class="button">返回柱状图</button>
      <button @click="getActive" class="button">去往动态图</button>
    </div>
  </div>
</template>

<script>
import { initCustomizedPieChart } from '@/utils/pieChart/customizedPie.js'
import { initpieWithScrollableChart } from '@/utils/pieChart/pieWithScrollablePie.js'
import { initdefaultArrangementChart } from '@/utils/pieChart/defaultArrangement.js'
export default {
  name: 'index',
  data() {
    return {
      nameData: {
        legendData: [
          {
            name: '赵',
            value: 2121
          },
          {
            name: '钱',
            value: 121
          }
          // {
          //   name: '孙',
          //   value: 1900
          // }
        ],
        seriesData: [
          {
            name: '赵',
            value: 2121
          },
          {
            name: '钱',
            value: 121
          },
          {
            name: '孙',
            value: 1900
          }
        ],
        selected: [
          {
            name: '赵',
            value: 2121
          },
          {
            name: '钱',
            value: 121
          },
          {
            name: '孙',
            value: 1900
          }
        ]
      }
    }
  },
  mounted() {
    initCustomizedPieChart('Customized')
    initpieWithScrollableChart('pie_with_scrollable', this.nameData)
    initdefaultArrangementChart('default_arrangement')
  },
  methods: {
    getActive: function() {
      let vue = this
      vue.$router.push('/ActiveChart')
    },
    getBar: function() {
      let vue = this
      vue.$router.push('/BarChart')
    }
  }
}
</script>

<style scoped>
.pieChart_main {
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(auto-fill, auto-fill);
}
.customized_pie,
.pie_with_scrollable {
  height: 500px;
  width: 300px;
}
.default_arrangement {
  height: 500px;
  width: 300px;
}
.button {
  margin-left: 90%;
}
</style>
