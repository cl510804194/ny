import React, { useState, useEffect } from 'react';
import TitleWithOther from '@/components/TitleWithOther';
import SimulateRow from './component/SimulateRow';
import SimulateRowTwp from './component/SimulateRowTwp';
import './index.scss';
const headerList = {
  title: '多能互补模拟工具'
};
function Index() {
  return (
    <div id="simulate">
      <TitleWithOther headerList={headerList}></TitleWithOther>
      <SimulateRow></SimulateRow>
      <SimulateRowTwp></SimulateRowTwp>
    </div>
  );
}
export default React.memo(Index);
