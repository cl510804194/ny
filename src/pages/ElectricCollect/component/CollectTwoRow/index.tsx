import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
import InfoCard from '../infoCard';
import EchartsItem from '../../../../components/EchartsItem';
import { vOption, aOption } from '../../data.js';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={24} m={12}>
        <InfoCard
          title="三相电压监测"
          leftButton="电压原始数据"
          rightButton="不平衡度分析"
        >
          <EchartsItem idroot="vecharts" option={vOption}></EchartsItem>
        </InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={24} m={12}>
        <InfoCard
          title="三相电流监测"
          leftButton="电压原始数据"
          rightButton="不平衡度分析"
        >
          <EchartsItem idroot="aecharts" option={aOption}></EchartsItem>
        </InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
