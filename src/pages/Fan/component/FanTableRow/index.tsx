import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
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
      <Col className="fan-col" xxs={24} xs={24} s={12} m={12}>
        <Table>
          <Table.Column title="序号" dataIndex="id" />
          <Table.Column title="电机负荷侧参数" dataIndex="param" />
          <Table.Column title="指标" dataIndex="dataIndex" />
        </Table>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <Table>
          <Table.Column title="序号" dataIndex="id" />
          <Table.Column title="电机负荷侧参数" dataIndex="param" />
          <Table.Column title="指标" dataIndex="dataIndex" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
