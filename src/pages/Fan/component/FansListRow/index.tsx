import React, { useState, useEffect } from 'react';
import { Grid, Card, Progress } from '@alifd/next';
import InfoCard from '../infoCard';
import FanList from '../FanList';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="fan-col" xxs={24} xs={24} s={12} m={18}>
        <InfoCard statusInfo title="设备实时状态"></InfoCard>
        <img
          className="fan-images"
          src={require('../../images/fan.png').default}
          alt=""
        />
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <InfoCard title="宏观指标">
          <FanList></FanList>
          {/* <EchartsItem></EchartsItem> */}
        </InfoCard>
        <InfoCard title="设备健康诊断">
          <div className="fan-progress">
            <Progress percent={90} size="large" shape="circle" />
            <p>健康率</p>
            <span>97%</span>
          </div>
          {/* <EchartsItem></EchartsItem> */}
        </InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
