import React, { useState, useEffect } from 'react';
import { Card, Icon, Divider, Grid, Button } from '@alifd/next';
const { Col, Row } = Grid;
function StatusInfo() {
  return (
    <Row className="infotable-container" justify="space-between" wrap>
      <Col xxs={24} xs={24} s={12} m={6}>
        <div>
          <span>设备健康状况</span>
          <p className="fan-info-data">优</p>
        </div>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <div>
          <span>无故障运行时间</span>
          <p className="fan-info-data">352天</p>
        </div>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <div>
          <span>距下次维保时间</span>
          <p className="fan-info-data">125天</p>
        </div>
      </Col>
      <Col xxs={24} xs={24} s={12} m={6}>
        <div>
          <span>监测数据点位</span>
          <p className="fan-info-data">24个</p>
        </div>
      </Col>
    </Row>
  );
}
function Index({ children, title, statusInfo, leftButton, rightButton }) {
  return (
    <Card className="fan-card" free>
      <Card.Header
        title={title}
        extra={
          <Button.Group>
            <Button type="primary">{leftButton}</Button>
            <Button type="secondary">{rightButton}</Button>
          </Button.Group>
        }
      />
      <Card.Content>
        {statusInfo ? <StatusInfo></StatusInfo> : null}
        {/* <p className="collect-info-data">{data}</p>
        // {percent ? <Pecent></Pecent> : null}
        {porpor ? <PorPor></PorPor> : null}
        <Divider></Divider>
        <p>
          {descName}&nbsp;{descData}
        </p> */}
        {children}
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
