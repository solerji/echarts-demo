import echarts from 'echarts'

function initGradientLineChart (node, dateList, valueList) {
  var GradientLine = echarts.init(document.getElementById(node))
  GradientLine.setOption({
    // Make gradient line here
    visualMap: [{
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    }, {
      show: false,
      type: 'continuous',
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: dateList.length - 1
    }],
    title: [{
      left: 'center',
      text: 'Gradient along the y axis'
    }, {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }],
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      data: dateList
    }, {
      data: dateList,
      gridIndex: 1
    }],
    yAxis: [{
      splitLine: {show: false}
    }, {
      splitLine: {show: false},
      gridIndex: 1
    }],
    grid: [{
      bottom: '60%'
    }, {
      top: '60%'
    }],
    series: [{
      type: 'line',
      showSymbol: false,
      data: valueList
    }, {
      type: 'line',
      showSymbol: false,
      data: valueList,
      xAxisIndex: 1,
      yAxisIndex: 1
    }]
  })
  return GradientLine
}
export { initGradientLineChart }
