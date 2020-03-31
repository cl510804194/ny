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
    name: '%',
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
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '14%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['03-27', '03-28', '03-29', '03-30', '03-31', '04-01', '04-02'],
      axisTick: {
        alignWithLabel: true
      },
      color: '#2198D3',
      axisLine: {
        lineStyle: {
          color: '#2198D3'
        }
      }
    }
  ],
  yAxis: {
    name: '%',
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
      // name: '直接访问',
      type: 'bar',
      barWidth: '30%',
      markLine: {
        data: [{ type: 'average', name: '平均值' }]
      },
      data: [10, 52, 200, 334, 390, 330, 220]
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
export const abnormalOption = {
  // color: ['#2198D3', '#2EC7C9', '#B6A2DE', '#FFB980', '#D87A80'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    data: [
      '过流越限',
      '过压越限',
      '低压越限',
      '功率因素过低',
      '频率越限',
      '电压不平衡',
      '电流不平衡',
      '谐波电压畸变',
      '谐波电流越限'
    ]
  },
  series: [
    {
      name: '能耗分项计量',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: '过流越限' },
        { value: 310, name: '过压越限' },
        { value: 234, name: '低压越限' },
        { value: 135, name: '功率因素过低' },
        { value: 238, name: '频率越限' },
        { value: 18, name: '电压不平衡' },
        { value: 148, name: '电流不平衡' },
        { value: 158, name: '谐波电压畸变' },
        { value: 154, name: '谐波电流越限' }
      ]
    }
  ]
};
