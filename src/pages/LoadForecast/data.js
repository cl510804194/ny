// 总体能耗监测
export const firstOption = {
  title: {
    text: '未来一小时负荷预测曲线',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    }
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
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] }
    }
  },
  legend: {
    left: 'center',
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
      data: [0, 1.2, 2.3, 4.6, 7.8]
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
      data: [0, 1, 2, 5, 8]
    }
  ]
};
// 总体能耗监测
export const secondOption = {
  title: {
    text: '当日负荷预测',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    }
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
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] }
    }
  },
  legend: {
    left: 'center',
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
      data: [0, 1.2, 2.3, 4.6, 7.8]
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
      data: [0, 1, 2, 5, 8]
    }
  ]
};
// 总体能耗监测
export const thirdOption = {
  title: {
    text: '当月负荷预测',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    }
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
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] }
    }
  },
  legend: {
    left: 'center',
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
      data: [0, 1.2, 2.3, 4.6, 7.8]
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
      data: [0, 1, 2, 5, 8]
    }
  ]
};
