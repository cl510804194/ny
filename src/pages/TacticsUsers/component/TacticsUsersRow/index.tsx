import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
import EchartsItem from '../../../../components/EchartsItem';
import { firstOption, threeOption } from '../../data.js';
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
        <EchartsItem
          idroot="abnormal-elec-use"
          option={firstOption}
        ></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <EchartsItem
          idroot="abnormal-normal-use"
          option={threeOption}
        ></EchartsItem>
      </Col>
      <Col className="abnormal-table" span={24}>
        <Table>
          <Table.Column title="户号" dataIndex="id" />
          <Table.Column title="区号" dataIndex="area" />
          <Table.Column title="户名" dataIndex="username" />
          <Table.Column title="地址" dataIndex="address" />
          <Table.Column title="异常率" dataIndex="abnormal" />
        </Table>
      </Col>
      <Col span={24}>
        <Table>
          <Table.Column title="计算" dataIndex="status" />
          <Table.Column title="总和" dataIndex="all" />
          <Table.Column title="累计和" dataIndex="allAdd" />
          <Table.Column title="方差" dataIndex="measure" />
        </Table>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
