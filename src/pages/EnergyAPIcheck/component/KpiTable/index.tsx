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
        <span className="api-echart-item-title-first ">能耗KPI统计</span>
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
          <Table.Column title="类型" dataIndex="type" />
          <Table.Column title="区域" dataIndex="area" />
          <Table.Column title="前日能耗(kWh)" dataIndex="yesterday" />
          <Table.Column title="当日能耗(kWh)" dataIndex="today" />
          <Table.Column title="能耗差值(kWh)" dataIndex="difference" />
          <Table.Column title="增减百分比" dataIndex="percent" />
          <Table.Column title="金额" dataIndex="money" />
          <Table.Column title="峰" dataIndex="max" />
          <Table.Column title="平" dataIndex="average" />
          <Table.Column title="谷" dataIndex="min" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
