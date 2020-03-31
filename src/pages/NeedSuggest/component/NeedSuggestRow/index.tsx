import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
// import EchartsItem from '@/pages/';
import EchartsItem from '../../../../components/EchartsItem';
import { firstOption } from '../../data';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="need-collect-col" span={24}>
        <EchartsItem
          idroot="need-collect-table"
          option={firstOption}
        ></EchartsItem>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
