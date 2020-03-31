export const timeDomainOption = {
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
    name: '冲击信号/g',
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
export const freqOption = {
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
    name: '|F|',
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
