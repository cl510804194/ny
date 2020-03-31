import React, { useState, useEffect } from 'react';
import { Card, Icon, Divider } from '@alifd/next';
import EchartsItem from '../EchartsItem';
import { stopTimeOption } from '../../data.js';
function PorPor() {
  return (
    <div className="porpor-container">
      <p>
        <span>占比&nbsp;3.5% </span>
      </p>
      <EchartsItem
        chartClass="collect-item-container"
        idroot="stopTime"
        option={stopTimeOption}
      ></EchartsItem>
    </div>
  );
}
function Pecent() {
  return (
    <p>
      <span>
        月同比&nbsp;12%{' '}
        <Icon className="api-absis-icon-down" type="arrow-down" />
      </span>
      <span>
        月环比&nbsp;12% <Icon className="api-absis-icon-up" type="arrow-up" />
      </span>
    </p>
  );
}
function Index({ title, data, percent, descName, descData, porpor }) {
  return (
    <Card free>
      <Card.Header title={title} extra={<Icon type="prompt" />} />
      <Card.Content>
        <p className="collect-info-data">{data}</p>
        {percent ? <Pecent></Pecent> : null}
        {porpor ? <PorPor></PorPor> : null}
        <Divider></Divider>
        <p>
          {descName}&nbsp;{descData}
        </p>
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
