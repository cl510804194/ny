import React, { useState, useEffect } from 'react';
import InfoTable from './component/InfoTable';
import CollectTwoRow from './component/CollectTwoRow';
import CollectThreeRow from './component/CollectThreeRow';
import './index.scss';
const infoTabList = [
  {
    label: '有功功率',
    data: 682,
    unit: 'kw',
    desc: '',
    image: require('./images/1.png')
  },
  {
    label: '电压',
    data: 383.6,
    unit: 'V',
    desc: '',
    image: require('./images/2.png')
  },
  {
    label: '电流',
    data: 18.3,
    unit: 'A',
    desc: '',
    image: require('./images/3.png')
  },
  {
    label: '功率因素',
    data: 0.96,
    unit: '',
    desc: '',
    image: require('./images/4.png')
  },
  {
    label: '频率',
    data: 48.9,
    unit: 'HZ',
    desc: '',
    image: require('./images/5.png')
  },
  {
    label: '电压谐波总畸变率',
    data: 4.2,
    unit: '%',
    desc: '',
    image: require('./images/6.png')
  }
];
function Index() {
  return (
    <div id="electriccollect">
      <InfoTable infoTabList={infoTabList}></InfoTable>
      <CollectTwoRow></CollectTwoRow>
      <CollectThreeRow></CollectThreeRow>
    </div>
  );
}
export default React.memo(Index);
