// 总体能耗监测
export const firstOption = {
  title: {
    text: '月需量峰值曲线',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    },
    subtext: '已考虑了光伏、储能对需量曲线的调整，以需量价格最优为目标'
  },
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
    data: ['预测值', '实际值', '实际申报值', '推荐申报值']
  },
  grid: {
    left: '5%',
    right: '10%',
    top: '30%',
    bottom: '0%',
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
        '1日',
        '3日',
        '5日',
        '7日',
        '9日',
        '11日',
        '13日',
        '15日',
        '17日',
        '19日',
        '21日',
        '23日',
        '25日',
        '27日',
        '29日',
        '31日'
      ]
    }
  ],
  yAxis: [
    {
      name: 'KW',
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

      itemStyle: {
        color: '#2198D3'
      },
      data: [
        3,
        1.2,
        2.3,
        4.6,
        7.8,
        11,
        1.2,
        2.3,
        4.6,
        7.8,
        3,
        1.2,
        2.3,
        4.6,
        7.8,
        7.8
      ]
    },
    {
      name: '实际值',
      type: 'line',
      stack: '总量',

      itemStyle: {
        color: '#2EC7C9'
      },
      lineStyle: {
        type: 'dashed'
      },
      data: [
        2,
        4.2,
        3.3,
        1.6,
        5.8,
        11.4,
        11.2,
        3.3,
        5.6,
        6.8,
        3.5,
        3.2,
        5.3,
        7.6,
        3.8,
        9.8
      ]
    },
    {
      name: '实际申报值',
      type: 'line',
      stack: '总量',

      itemStyle: {
        color: '#C8B2F4'
      },

      data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      name: '推荐申报值',
      type: 'line',
      stack: '总量',

      itemStyle: {
        color: '#FFB980'
      },

      data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
    }
  ]
};
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
    bottom: '10%',
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
export const threeOption = {
  color: ['#2198D3', '#2EC7C9', '#B6A2DE'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    left: 'right',
    data: ['平', '谷', '峰']
  },
  grid: {
    left: '5%',
    right: '10%',
    top: '20%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    name: '%',
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    data: ['1号楼', '2号楼', '3号楼', '孵化器', '数据中心', '生产工厂']
  },
  series: [
    {
      name: '平',
      type: 'bar',
      stack: '总量',

      data: [15, 25, 13, 25, 18, 24]
    },
    {
      name: '谷',
      type: 'bar',
      stack: '总量',

      data: [45, 24, 47, 46, 42, 46]
    },
    {
      name: '峰',
      type: 'bar',
      stack: '总量',

      data: [40, 51, 40, 30, 40, 33]
    }
  ]
};
export const fourthOption = {
  color: ['#2198D3', '#2EC7C9', '#B6A2DE', '#FFB980', '#D87A80'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
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
        { value: 335, name: '暖通用电' },
        { value: 310, name: '动力用电' },
        { value: 234, name: '照明插座' },
        { value: 135, name: '特殊用电' },
        { value: 1548, name: '其他' }
      ]
    }
  ]
};
