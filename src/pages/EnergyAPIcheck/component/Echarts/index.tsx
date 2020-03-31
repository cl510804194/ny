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
import AllTitle from '../AllTitle';
import { secondOption, fourthOption } from './data';
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
      <Col xxs={24} xs={24} s={12} m={12}>
        <EchartsItem
          idroot="all"
          title="能耗费用分项计量"
          option={fourthOption}
        >
          <AllTitle></AllTitle>
        </EchartsItem>
      </Col>
      <Col xxs={24} xs={24} s={12} m={12}>
        <EchartsItem idroot="unit" title="单位产值能耗" option={secondOption}>
          <AllTitle></AllTitle>
        </EchartsItem>
      </Col>
    </Row>
  );
}
export default React.memo(Echarts);
