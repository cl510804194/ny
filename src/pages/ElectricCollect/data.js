export const vOption = {
  colors: ['#2198D3'],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    color: '#2198D3',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
  },
  yAxis: {
    name: 'V',
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    color: '#2198D3',
    nameTextStyle: {
      fontSize: 13
    }
  },
  series: [
    {
      name: '冲击信号',
      type: 'line',
      stack: '总量',
      itemStyle: {
        color: '#2198D3'
      },
      data: [10, 132, 141, 134, 90, 230, 210]
    }
  ]
};
export const aOption = {
  colors: ['#2198D3'],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    color: '#2198D3',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
  },
  yAxis: {
    name: 'A',
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    color: '#2198D3',
    nameTextStyle: {
      fontSize: 13
    }
  },
  series: [
    {
      name: '冲击信号',
      type: 'line',
      stack: '总量',
      itemStyle: {
        color: '#2198D3'
      },
      data: [10, 132, 141, 134, 90, 230, 210]
    }
  ]
};
export const monOption = {
  color: ['#2198D3', '#2EC7C9', '#B6A2DE'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      color: '#2198D3',
      axisLine: {
        lineStyle: {
          color: '#2198D3'
        }
      },
      data: [
        '1次',
        '2次',
        '3次',
        '4次',
        '5次',
        '6次',
        '7次',
        '8次',
        '9次',
        '10次',
        '11次',
        '12次',
        '13次',
        '14次'
      ],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      name: '%',
      type: 'value',
      color: '#2198D3',
      axisLine: {
        lineStyle: {
          color: '#2198D3'
        }
      },
      nameTextStyle: {
        fontSize: 13
      }
    }
  ],
  series: [
    {
      // name: '直接访问',
      type: 'bar',
      barWidth: '30%',
      data: [10, 52, 200, 334, 390, 330, 220, 10, 52, 200, 454, 156, 330, 220]
    },
    {
      // name: '直接访问',
      type: 'bar',
      barWidth: '30%',
      data: [41, 43, 42, 431, 52, 32, 31, 10, 52, 421, 334, 234, 210, 220]
    }
  ]
};
