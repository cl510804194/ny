// 历史能耗对比
export const secondOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    left: 'right',
    data: ['预测值', '实际值']
  },
  grid: {
    left: '5%',
    right: '10%',
    top: '20%',
    bottom: '30%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      color: '#2198D3',
      axisLine: {
        lineStyle: {
          color: '#2198D3'
        }
      },
      data: ['00:00', '06:00', '12:00', '18:00', '24:00']
    }
  ],
  yAxis: [
    {
      name: 'tce',
      color: '#2198D3',
      axisLine: {
        lineStyle: {
          color: '#2198D3'
        }
      },
      nameTextStyle: {
        fontSize: 13
      },
      type: 'value'
    }
  ],
  series: [
    {
      name: '预测值',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      itemStyle: {
        color: '#2198D3'
      },
      data: [0.17, 0.23, 0.44, 0.37, 0.45]
    },
    {
      name: '实际值',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      itemStyle: {
        color: '#2EC7C9'
      },
      lineStyle: {
        type: 'dashed'
      },
      data: [0.15, 0.22, 0.42, 0.32, 0.44]
    }
  ]
};

export const fourthOption = {
  color: ['#2198D3', '#2EC7C9', '#B6A2DE', '#FFB980', '#D87A80'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  grid: {
    left: '45%',
    right: '20%',
    top: '10%',
    bottom: '30%',
    containLabel: true
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    data: ['暖通用电', '动力用电', '照明插座', '特殊用电', '其他']
  },
  series: [
    {
      name: '能耗分项计量',
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['35%', '43%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '25',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: '暖通用电' },
        { value: 310, name: '动力用电' },
        { value: 234, name: '照明插座' },
        { value: 135, name: '特殊用电' },
        { value: 1548, name: '其他' }
      ]
    }
  ]
};
export const tableCardoption = {
  xAxis: {
    show: false,
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  grid: {
    left: '-10%',
    right: '10%',
    top: '10%',
    bottom: '0%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    show: false
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',

      areaStyle: {}
    }
  ]
};
