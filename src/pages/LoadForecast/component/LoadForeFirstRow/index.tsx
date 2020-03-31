import React, { useState, useEffect } from 'react';
import { Grid, Table } from '@alifd/next';
// import EchartsItem from '../EchartsItem/';
import EchartsItem from '../../../../components/EchartsItem';
import TableCard from '../TableCard';
import { firstOption, secondOption, thirdOption } from '../../data.js';
const { Row, Col } = Grid;
const cardList = [
  {
    label: '当日最大值/时间',
    data: '996KW/09:00',
    desc: '当日预测峰值1093KW'
  },
  {
    label: '当日最小值/时间',
    data: '372KW/05:00'
    // desc: '当日预测峰值1093KW'
  },
  {
    label: '当月实际已发生峰值',
    data: '1103KW',
    desc: '发生于2018-11-11 15:15'
  },
  {
    label: '本月预测峰值',
    data: '1255KW',
    desc: '需量1500KW'
  }
];
function Index() {
  const renderCardItem = () => {
    return cardList.map(item => {
      return (
        <Col key={`load${item.data}`} span={12}>
          <TableCard {...item}></TableCard>
        </Col>
      );
    });
  };
  return (
    <Row
      className="infotable-container fan-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={24} m={12}>
        <Row justify="space-between" gutter={5} wrap>
          {renderCardItem()}
        </Row>
      </Col>
      <Col xxs={24} xs={24} s={24} m={12}>
        <EchartsItem
          chartClass="load-forecast-fore"
          idroot="foreastOneHour"
          option={firstOption}
        ></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <EchartsItem idroot="foreastToday" option={secondOption}></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <EchartsItem idroot="foreastMonth" option={thirdOption}></EchartsItem>
      </Col>
    </Row>
  );
}
export default React.memo(Index);
