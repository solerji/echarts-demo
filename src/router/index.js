import Vue from 'vue'
import Router from 'vue-router'
import LineChart from '@/pages/LineChart.vue'
import PieChart from '@/pages/PieChart.vue'
import BarChart from '@/pages/BarChart.vue'
import otherChart from '@/pages/otherChart.vue'
import MapChart from '@/pages/MapChart.vue'
import ActiveChart from '@/pages/ActiveChart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LineChart',
      component: LineChart
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: PieChart
    },
    {
      path: '/BarChart',
      name: 'BarChart',
      component: BarChart
    },
    {
      path: '/otherChart',
      name: 'otherChart',
      component: otherChart
    },
    {
      path: '/MapChart',
      name: 'MapChart',
      component: MapChart
    },
    {
      path: '/ActiveChart',
      name: 'ActiveChart',
      component: ActiveChart
    }
  ],
  mode: 'history'
})
