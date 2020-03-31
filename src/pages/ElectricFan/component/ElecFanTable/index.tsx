import React, { useState, useEffect } from 'react';
import { Select, Divider, Grid, Table } from '@alifd/next';
const { Row, Col } = Grid;
const dataSource = [];
function Index() {
  return (
    <Row className="infotable-container" wrap justify="space-between">
      <Col span={4}>
        <span className="api-echart-item-title-first ">
          电能异常预警分项统计
        </span>
      </Col>
      <Col span={24}>
        <Divider></Divider>
      </Col>
      <Col span={24}>
        <Table>
          <Table.Column title="单位名称" dataIndex="name" />
          <Table.Column title="电能异常详情" dataIndex="elecAbunuDesc" />
          <Table.Column title="异常类型" dataIndex="abunType" />
          <Table.Column title="优先级" dataIndex="priority" />
          <Table.Column title="相关性" dataIndex="dependency" />
          <Table.Column title="发生时间" dataIndex="startTime" />
          <Table.Column title="结束时间" dataIndex="endTime" />
          <Table.Column title="持续时间" dataIndex="continueTime" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
