import React, { useState, useEffect } from 'react';
import { Grid, Tab } from '@alifd/next';
import { firstOption } from '../../data';
import EchartsItem from '@/components/EchartsItem';
const { Row, Col } = Grid;

function Index() {
  return (
    <Row
      className="infotable-container simulate-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="simulate-col" xxs={12} xs={12} s={8} m={8}>
        <img
          className="simulate-img"
          src={require('../../images/factory-status.png').default}
          alt=""
        />
      </Col>
      <Col className="simulate-col" xxs={12} xs={12} s={8} m={15}>
        <Tab>
          <Tab.Item title="电价" key="1">
            <EchartsItem
              idroot="simulate-echarts"
              option={firstOption}
            ></EchartsItem>
          </Tab.Item>
          <Tab.Item title="负荷" key="2"></Tab.Item>
          <Tab.Item title="光伏" key="3"></Tab.Item>
          <Tab.Item title="电池" key="4"></Tab.Item>
          <Tab.Item title="电费" key="5"></Tab.Item>
        </Tab>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
