import React, { useState, useEffect } from 'react';
import { Select, Divider, Grid, Table } from '@alifd/next';
const { Row, Col } = Grid;
const dataSource = [];
function Index() {
  return (
    <Row className="infotable-container" wrap justify="space-between">
      <Col span={4}>
        <span className="api-echart-item-title-first ">故障列表</span>
      </Col>
      <Col span={24}>
        <Divider></Divider>
      </Col>
      <Col span={24}>
        <Table dataSource={dataSource}>
          <Table.Column title="设备名称" dataIndex="name" />
          <Table.Column title="故障详情" dataIndex="type" />
          <Table.Column title="当前状态" dataIndex="currentStatus" />
          <Table.Column title="持续时间" dataIndex="continueTime" />
          <Table.Column title="类型" dataIndex="type" />
          <Table.Column title="时间" dataIndex="time" />
          <Table.Column title="状态" dataIndex="status" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
