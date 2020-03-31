import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
import InfoCard from '../infoCard';
import FanList from '../FanList';
import EchartsItem from '@/components/EchartsItem';
import { timeDomainOption, freqOption } from '../../data.js';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="fan-col" xxs={24} xs={24} s={12} m={12}>
        <InfoCard title="时域分析图" subTitle="风机轴承垂直振动冲击有效值">
          <EchartsItem
            idroot="timedomain"
            option={timeDomainOption}
          ></EchartsItem>
        </InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <InfoCard title="频率分析图" subTitle="风机轴承垂直振动频谱">
          <EchartsItem idroot="timedomain2" option={freqOption}></EchartsItem>
        </InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
