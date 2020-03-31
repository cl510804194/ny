import React, { useState, useEffect } from 'react';
import { Card, Divider, Icon } from '@alifd/next';
import TableCardEchartsItem from '../TableCardEchartsItem';
import { tableCardoption } from '../Echarts/data';
function Index({ label, data, unit, desc, plan, percent, absis, chartsId }) {
  return (
    <Card free className="table-card-container">
      <Card.Header
        className="table-card-header"
        title={label}
        // subTitle={desc}
      />
      <Card.Content>
        <p>
          实际
          <span className="table-card-data">{data}</span>
          <span>{unit}</span>
        </p>
        <p>
          计划
          <span className="table-card-data">{plan}</span>
          <span>{unit}</span>
        </p>
        <Divider></Divider>
        <p>{desc}</p>
        <p>
          <span className="table-card-data">{percent}</span>% &nbsp;&nbsp; 同比
          &nbsp;{Math.abs(absis)}%
          {absis > 0 ? (
            <Icon className="api-absis-icon-up" type="arrow-up" />
          ) : (
            <Icon className="api-absis-icon-down" type="arrow-down" />
          )}
        </p>
        <Divider></Divider>
        <TableCardEchartsItem
          idroot={chartsId}
          option={tableCardoption}
        ></TableCardEchartsItem>
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
