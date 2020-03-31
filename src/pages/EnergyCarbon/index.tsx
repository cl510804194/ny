import React from 'react';
import Echarts from './component/Echarts';
import KpiTable from './component/KpiTable';
import TitleWithButDate from '@/components/TitleWithButDate';
import './index.scss';
const headerList = {
  title: '导出',
  leftButton: '月',
  rightButton: '年'
};

function Index() {
  return (
    <div id="carbon-container">
      <TitleWithButDate headerList={headerList}></TitleWithButDate>
      <section className="monitor-content">
        {/* <InfoTable infoTabList={infoTabList}></InfoTable> */}
        <Echarts></Echarts>
        <KpiTable></KpiTable>
      </section>
    </div>
  );
}
export default React.memo(Index);
