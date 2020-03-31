import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
// import EchartsItem from '@/pages/';
import EchartsItem from '../../../../components/EchartsItem';
import { firstOption } from '../../data.js';
const { Row, Col } = Grid;
function Index() {
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col className="need-collect-col" xxs={24} xs={24} s={12} m={12}>
        <EchartsItem
          chartClass="need-collect-echart"
          idroot="fourceOneHour"
          option={firstOption}
        ></EchartsItem>
      </Col>
      <Col className="need-collect-col" xxs={24} xs={24} s={12} m={12}>
        <Table>
          <Table.Column title="生产单号" dataIndex="id" />
          <Table.Column title="预测需量值（KW）" dataIndex="plan" />
          <Table.Column title="实际需量值（KW）" dataIndex="real" />
        </Table>
      </Col>
      <Col span={24}>
        <Table>
          <Table.Column title="状态" dataIndex="status" />
          <Table.Column title="发生时间" dataIndex="startTime" />
          <Table.Column title="结束时间" dataIndex="endTime" />
          <Table.Column title="结束时间" dataIndex="endTime" />
          <Table.Column title="持续时间（分钟）" dataIndex="continueTime" />
          <Table.Column title="电费罚金" dataIndex="elecMoney" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
