// 总体能耗监测
export const firstOption = {
  title: {
    text: '耗电量',
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
  legend: {
    // left: 'right',
    data: ['用户耗电量']
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
      name: '$/kwh',
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
      name: '用户耗电量',
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
    data: ['正常化用户耗电量', '正常化平均耗电量']
  },
  grid: {
    left: '5%',
    right: '10%',
    top: '20%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    color: '#2198D3',
    axisLine: {
      lineStyle: {
        color: '#2198D3'
      }
    },
    data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06']
  },
  yAxis: [
    {
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
      name: '正常化用户耗电量',
      type: 'line',
      stack: '总量',

      data: [15, 25, 13, 25, 18, 24]
    },
    {
      name: '正常化平均耗电量',
      type: 'line',
      stack: '总量',

      data: [45, 24, 47, 46, 42, 46]
    }
  ]
};
