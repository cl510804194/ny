import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
import InfoCard from '../infoCard';
import EchartsItem from '../../../../components/EchartsItem';
import { vOption, aOption, abnormalOption } from '../../data.js';
const { Row, Col } = Grid;

function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={12} m={12}>
        <InfoCard hasSelect="选择变压器" title="变压器负载率">
          <EchartsItem idroot="vecharts" option={vOption}></EchartsItem>
        </InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <InfoCard title="总体电能损耗">
          <EchartsItem idroot="aecharts" option={aOption}></EchartsItem>
        </InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <InfoCard title="电能异常预警分项统计">
          <EchartsItem
            idroot="electionfanabUnunnal"
            option={abnormalOption}
          ></EchartsItem>
        </InfoCard>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <InfoCard hasSelect="选择类别" title="电能异常预警历史统计">
          <EchartsItem idroot="aecharts3" option={vOption}></EchartsItem>
        </InfoCard>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
