import React, { useState, useEffect } from 'react';
import InfoTable from '@/components/InfoTable';
import NeedSuggestRow from './component/NeedSuggestRow/';
import './index.scss';
const infoTabList = [
  {
    label: '当月需量申报值',
    data: 1500,
    unit: 'KW',
    desc: ''
  },
  {
    label: '当前最大需量',
    data: 1200,
    unit: 'KW',
    desc: ''
  },
  {
    label: '当前罚金',
    data: '￥0',
    unit: '',
    desc: '需量罚金￥76/KW/月'
  },
  {
    label: '推荐需量申报值',
    data: 1300,
    unit: 'KW',
    desc: ''
  },
  {
    label: '需量调控',
    data: -200,
    unit: 'KW',
    desc: '需量费用￥38/KW/月'
  },
  {
    label: '月核减成本',
    data: '￥7600',
    unit: '',
    desc: ''
  }
];
function Index() {
  return (
    <div id="need-collect">
      <InfoTable infoTabList={infoTabList}></InfoTable>
      <NeedSuggestRow></NeedSuggestRow>
    </div>
  );
}
export default React.memo(Index);
