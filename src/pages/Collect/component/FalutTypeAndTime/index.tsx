import React, { useState, useEffect } from 'react';
import { Grid, Tab } from '@alifd/next';
import EchartsItem from '../EchartsItem';
import { falutTimeOption } from '../../data';
import FaultList from '../FalutList';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container"
      justify="space-between"
      wrap
      gutter={5}
    >
      <Col className="collect-tab" xxs={24} xs={24} s={12} m={17}>
        <Tab>
          <Tab.Item title="故障频次" key="1">
            <EchartsItem
              chartClass="collect-tab-chart"
              idroot="faultTime"
              option={falutTimeOption}
            ></EchartsItem>
          </Tab.Item>
          <Tab.Item title="故障种类" key="2">
            Doc content
          </Tab.Item>
        </Tab>
      </Col>
      <Col className="collect-tab" xxs={24} xs={24} s={12} m={6}>
        <FaultList></FaultList>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
