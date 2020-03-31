import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
import InfoCard from '../infoCard';
import EchartsItem from '../../../../components/EchartsItem';
import { monOption } from '../../data.js';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={24} m={24}>
        <InfoCard
          title="谐波监测"
          leftButton="谐波电压含有率"
          rightButton="谐波电流幅值"
        >
          <EchartsItem idroot="vecharts1" option={monOption}></EchartsItem>
          <EchartsItem idroot="vecharts2" option={monOption}></EchartsItem>
          <EchartsItem idroot="vecharts3" option={monOption}></EchartsItem>
        </InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
