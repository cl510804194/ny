import React from 'react';
import TitleWithButDate from '@/components/TitleWithButDate';
import FanTwoRow from './component/FanTwoRow';
import ElecFanTable from './component/ElecFanTable';
import './index.scss';
const headerList = {
  title: '电能质量管理汇总',
  leftButton: '日',
  rightButton: '月',
  type: 'p'
};

function Index() {
  return (
    <div id="carbon-container">
      <TitleWithButDate headerList={headerList}></TitleWithButDate>
      <FanTwoRow></FanTwoRow>
      <ElecFanTable></ElecFanTable>
    </div>
  );
}
export default React.memo(Index);
