import React, { useState, useEffect } from 'react';
import echarts from 'echarts';
import _ from 'lodash';
function Index({ idroot, option, chartClass }) {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById(idroot));
    myChart.setOption(option);
    window.addEventListener(
      'resize',
      _.debounce(() => {
        myChart.resize();
      }, 150)
    );
    // window.onresize = () => {
    //   myChart.resize();
    // };
    return () => {
      // window.removeEventListener('resize', chartListennerRemove);
    };
  }, []);

  return (
    <div className={`echarts-item-container ${chartClass}`}>
      <div className="echarts-item" id={idroot}></div>
    </div>
  );
}
export default React.memo(Index);
