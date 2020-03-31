import React, { useState, useEffect } from 'react';
import TitleWithOther from '@/components/TitleWithOther';
import InfoTable from '@/components/InfoTable';
import TacticsUsersRow from './component/TacticsUsersRow';

import './index.scss';
const headerList = {
  title: '异常用户列表'
};
const infoTabList = [
  {
    label: '户号',
    data: '0221230354'
  },
  {
    label: '区号',
    data: '06399'
  },
  {
    label: '户名',
    data: 'Jim Green'
  },
  {
    label: '地址',
    data: 'London No. 1 Lake Par'
  },
  {
    label: '时段',
    data: '2012/01/01-2017/01/01'
  },
  {
    label: '异常率',
    data: '93%'
  }
];
function Index() {
  return (
    <div id="tactics-users">
      <TitleWithOther headerList={headerList}></TitleWithOther>
      <InfoTable infoTabList={infoTabList}></InfoTable>
      <TacticsUsersRow></TacticsUsersRow>
    </div>
  );
}
export default React.memo(Index);
