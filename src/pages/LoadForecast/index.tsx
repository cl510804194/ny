import React, { useState, useEffect } from 'react';
import TitleWithOther from './component/TitleWithOther/';
import LoadForeFirstRow from './component/LoadForeFirstRow/';
import './index.scss';
const headerList = {
  title: '负荷预测',
  date: '生产日期'
};

function Index() {
  return (
    <div id="load-forecast">
      <TitleWithOther headerList={headerList}></TitleWithOther>
      <LoadForeFirstRow></LoadForeFirstRow>
    </div>
  );
}
export default React.memo(Index);
