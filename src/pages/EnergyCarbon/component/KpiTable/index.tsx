import React, { useState, useEffect } from 'react';
import { Select, Divider, Grid, Table } from '@alifd/next';
const { Row, Col } = Grid;
const dataSource = [];
function Index() {
  return (
    <Row
      className="infotable-container kpi-table-container"
      wrap
      justify="space-between"
    >
      <Col span={4}>
        <span className="api-echart-item-title-first ">减排完成率</span>
      </Col>
      <Col span={3}>
        <Select label="类型"></Select>
      </Col>
      <Col span={24}>
        <Divider></Divider>
      </Col>
      <Col span={24}>
        <Table dataSource={dataSource}>
          <Table.Column title="名称" dataIndex="name" />
          <Table.Column title="实际值（t CO₂）" dataIndex="really" />
          <Table.Column title="计划值（t CO₂）" dataIndex="plan" />

          <Table.Column title="完成率" dataIndex="finishPercent" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
