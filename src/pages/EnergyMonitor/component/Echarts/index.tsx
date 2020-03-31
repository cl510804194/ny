import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { Grid } from '@alifd/next';
const { Row, Col } = Grid;
import EchartsItem from '../EchartsItem';
import ImgShow from '../ImaShow';
import { firstOption, secondOption, threeOption, fourthOption } from './data';
function Echarts() {
  // const renderCard = () => {
  //     return infoTabList.map(item => {
  //         const { data, unit, label, desc } = item;
  //         return (
  //             <Col key={`${label}`} xs={8} s={8} m={4}>
  //                 <TableCard
  //                     data={data}
  //                     unit={unit}
  //                     label={label}
  //                     desc={desc}
  //                 ></TableCard>
  //             </Col>
  //         );
  //     });
  // };
  return (
    <Row
      className="infotable-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      <Col xxs={24} xs={24} s={12} m={8}>
        <EchartsItem
          idroot="all"
          title="总体能耗监测"
          option={firstOption}
          real={true}
        ></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={8}>
        <ImgShow
          title="能耗流动概览图"
          image={require('../../images/nhld.png').default}
        ></ImgShow>
      </Col>
      <Col xxs={24} xs={24} s={12} m={8}>
        <EchartsItem
          idroot="history"
          title="历史能耗对比"
          option={secondOption}
        ></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={8}>
        <EchartsItem
          idroot="ratio"
          title="峰谷平用电比例"
          option={threeOption}
        ></EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={8}>
        <ImgShow
          title="供配电分布"
          image={require('../../images/gdfb.png').default}
        ></ImgShow>
      </Col>
      <Col xxs={24} xs={24} s={12} m={8}>
        <EchartsItem
          idroot="unit"
          title="能耗分项计量"
          option={fourthOption}
        ></EchartsItem>
      </Col>
    </Row>
  );
}
export default React.memo(Echarts);
