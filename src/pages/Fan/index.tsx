import React, { useState, useEffect } from 'react';
import { Grid, Card, Progress } from '@alifd/next';
import IceTitle from '@icedesign/title';
import FanListRow from './component/FansListRow';
import FanTabkeRow from './component/FanTableRow';
import FanEchartsRow from './component/FanEchartsRow';
import './index.scss';

function Index() {
  return (
    <div id="fan">
      <IceTitle text="一号工厂 1#风机 ID: 5230052" />
      <FanListRow></FanListRow>
      <FanTabkeRow></FanTabkeRow>
      <FanEchartsRow></FanEchartsRow>
    </div>
  );
}
export default React.memo(Index);
