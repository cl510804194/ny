export const stopTimeOption = {
  color: ['#3AA0FF', '#F0F2F5'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],

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
        { value: 70, name: '直接访问' },
        { value: 30, name: '邮件营销' }
      ]
    }
  ]
};
export const falutTimeOption = {
  color: ['#3AA0FF'],
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
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: '40%',
      data: [10, 52, 200, 334, 390, 330, 220, 121, 32, 76, 168, 153]
    }
  ]
};
