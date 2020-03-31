import React, { useState, useEffect } from 'react';
import echarts from 'echarts';
import moment from 'moment';
import _ from 'lodash';
function Index({ idroot, title, option, real }) {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById(idroot));
    myChart.setOption(option);
    window.addEventListener(
      'resize',
      _.debounce(() => {
        myChart.resize();
      }, 150)
    );
    if (!real) {
      return;
    }
    const timer = setInterval(() => {
      const now = moment().format('HH:00');
      const random = Math.random() * 10;
      const date = option.xAxis[0].data;
      date.push(now);
      const newdataOne = option.series[0].data;
      newdataOne.push(random);
      const newdataTwo = option.series[1].data;
      newdataTwo.push(random);
      myChart.setOption({
        xAxis: {
          data: date
        },
        series: [
          {
            name: '预测值',
            data: newdataOne
          },
          {
            name: '实际值',
            data: newdataTwo
          }
        ]
      });
    }, 5000);
    window.onresize = () => {
      myChart.resize();
    };
    return () => {
      clearInterval(timer);
      // window.removeEventListener('resize', chartListennerRemove);
    };
  }, []);

  return (
    <div className="echarts-item-container">
      <p className="echart-item-title">{title}</p>
      <div className="echarts-item" id={idroot}></div>
    </div>
  );
}
export default React.memo(Index);
