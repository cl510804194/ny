import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { Select, DatePicker, Tab } from '@alifd/next';
import InfoTable from './component/InfoTable/InfoTable';
import Echarts from './component/Echarts';
const { RangePicker } = DatePicker;
const tabs = [
  { tab: '综合', key: 0, content: 'This is home page' },
  { tab: '电', key: 1, content: 'This is document page' },
  { tab: '气', key: 2, content: 'This is api page' },
  { tab: '冷', key: 3, content: 'This is api page' },
  { tab: '热', key: 4, content: 'This is api page' },
  { tab: '水', key: 5, content: 'This is api page' }
];
import './index.scss';
const infoTabList = [
  {
    label: '本月综合能耗',
    data: 138.62,
    unit: 'tce',
    desc: '',
    real: true
  },
  {
    label: '本月购电总量',
    data: 594423,
    unit: 'kWh',
    desc: ''
  },
  {
    label: '本月用水总量',
    data: 3206,
    unit: 't',
    desc: ''
  },
  {
    label: '本月用气总量',
    data: 58049,
    unit: 'm³',
    desc: ''
  },
  {
    label: '区域供冷总量',
    data: 0,
    unit: 'kWh',
    desc: '区域供冷时无数据'
  },
  {
    label: '区域供热总量',
    data: 0,
    unit: 'kWh',
    desc: '区域供热时无数据'
  }
];

function Index() {
  return (
    <div id="monitor-container">
      <section className="monitor-header">
        <div className="monitor-header1">
          <Select label="区域"></Select>
          <RangePicker showTime />
        </div>
        <Tab>
          {tabs.map(item => (
            <Tab.Item key={item.key} title={item.tab}></Tab.Item>
          ))}
        </Tab>
      </section>
      <section className="monitor-content">
        <InfoTable infoTabList={infoTabList}></InfoTable>
        <Echarts></Echarts>
      </section>
    </div>
  );
}
export default React.memo(Index);
