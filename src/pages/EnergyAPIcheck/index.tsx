import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { Select, DatePicker, Tab, Button } from '@alifd/next';
import InfoTable from './component/InfoTable/InfoTable';
import Echarts from './component/Echarts';
import KpiTable from './component/KpiTable';
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
    label: '本月综合能耗KPI',
    data: 138.62,
    plan: 140.26,
    unit: 'tce',
    desc: '本月综合能耗KPI完成率',
    percent: 95,
    absis: 12,
    chartsId: 'monthKpi'
  },
  {
    label: '本月用电KPI',
    data: 594.42,
    plan: 560.26,
    unit: 'MWh',
    desc: '本月用电KPI完成率',
    percent: 86,
    absis: -12,
    chartsId: 'monthElec'
  },
  {
    label: '本月用水KPI',
    data: 8049,
    plan: 7000,
    unit: 't',
    desc: '本月用水KPI完成率',
    percent: 86,
    absis: -12,
    chartsId: 'monthWater'
  },
  {
    label: '本月用热KPI',
    data: 452.62,
    plan: 500,
    unit: 'tce',
    desc: '本月用热KPI完成率',
    percent: 95,
    absis: 12,
    chartsId: 'monthHot'
  },
  {
    label: '本月用气KPI',
    data: 58049,
    plan: 49000,
    unit: 'm³',
    desc: '本月用气KPI完成率',
    percent: 95,
    absis: -12,
    chartsId: 'monthGas'
  },
  {
    label: '本月用冷KPI',
    data: 452.62,
    plan: 420.01,
    unit: 'tce',
    desc: '本月用冷KPI完成率',
    percent: 95,
    absis: 12,
    chartsId: 'monthCold'
  }
];

function Index() {
  return (
    <div id="monitor-container">
      <section className="monitor-header">
        <div className="monitor-header1">
          <Select label="区域"></Select>
          <div className="check-button-group">
            <Button.Group>
              <Button type="primary">年</Button>
              <Button type="normal">月</Button>
              <Button type="normal">日</Button>
            </Button.Group>
            <RangePicker showTime />
          </div>
        </div>
      </section>
      <section className="monitor-content">
        <InfoTable infoTabList={infoTabList}></InfoTable>
        <Echarts></Echarts>
        <KpiTable></KpiTable>
      </section>
    </div>
  );
}
export default React.memo(Index);
