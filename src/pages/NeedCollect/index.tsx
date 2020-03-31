import React, { useState, useEffect } from 'react';
import TitleWithOther from '@/components/TitleWithOther';
import NeedCollectRow from './component/NeedCollectRow';
const headerList = {
  title: '实时需量监测'
};
function Index() {
  return (
    <div id="need-collect">
      <TitleWithOther headerList={headerList}></TitleWithOther>
      <NeedCollectRow></NeedCollectRow>
      {/* <LoadForeFirstRow></LoadForeFirstRow> */}
    </div>
  );
}
export default React.memo(Index);
