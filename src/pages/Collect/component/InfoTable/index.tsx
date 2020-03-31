import React, { useState, useEffect } from 'react';
import { Grid } from '@alifd/next';
import InfoCard from '../infoCard';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={12} m={6}>
        <InfoCard
          percent={true}
          title="本月故障总数"
          data={6}
          descName="年度故障总量"
          descData="27"
        ></InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <InfoCard title="本月故障停机时间" data="72h" porpor={true}></InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <InfoCard
          percent={true}
          title="异常设备"
          data={10}
          descName="监测设备总数"
          descData="226"
        ></InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <InfoCard
          percent={true}
          title="待维护设备（本周/下周）"
          data="22/6"
          descName="本月已维护次数"
          descData="60"
        ></InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
