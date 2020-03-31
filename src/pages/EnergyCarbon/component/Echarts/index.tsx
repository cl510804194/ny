import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { Grid, Divider, List, Icon } from '@alifd/next';
const { Row, Col } = Grid;
import CarbonList from '../CarbonList';
import MeasureList from '../MeasureList';
import ShowCard from '../ShowCard';
import { secondOption, fourthOption } from './data';
import EcharsItem from '../EchartsItem';
const echartsConfig = [
  {
    title: '同期碳排对比',
    idroot: 'same-term',
    option: fourthOption
  },
  {
    title: '碳市场排放',
    idroot: 'carbon-marketing',
    option: secondOption,
    children: EcharsItem
  }
];
function Echarts() {
  const renderItem = () => {
    return echartsConfig.map(item => {
      return (
        <Col xxs={24} xs={24} s={12} m={8} key={`echarts${item.title}`}>
          <ShowCard title={item.title}>
            <EcharsItem idroot={item.idroot} option={item.option}></EcharsItem>
          </ShowCard>
        </Col>
      );
    });
  };
  return (
    <Row
      className="infotable-container"
      justify="space-between"
      gutter={5}
      wrap
    >
      {renderItem()}
      <Col className="carbon-col" xxs={24} xs={24} s={12} m={8}>
        <ShowCard title="EQuota Insight CSR">
          <ul className="echarts-item-container carbon-item-container carbon-csr ">
            <li>减少二氧化碳排放量71347吨</li>
            <li>节约能源消耗量268849兆瓦时</li>
            <li>减少燃煤电力供给89877兆瓦时</li>
            <li>已安装太阳能发电量113毫伏</li>
            <li>为客户节省了540万美元的能耗相关消耗</li>
          </ul>
        </ShowCard>
      </Col>
      <Col className="carbon-col" xxs={24} xs={24} s={12} m={6}>
        <ShowCard title="EQuota Insight CSR">
          <CarbonList></CarbonList>
        </ShowCard>
      </Col>
      <Col className="carbon-col" xxs={24} xs={24} s={12} m={18}>
        <ShowCard title="碳排量分项计量">
          <Row justify="space-between" gutter={5} wrap>
            <Col
              className="carbon-col"
              offset={1}
              xxs={24}
              xs={24}
              s={12}
              m={5}
            >
              <ul className="carbon-measure-all">
                <li>总配额：6500 t CO₂</li>
                <li>已用额：5543 t CO₂</li>
                <li>剩余额：657 t CO₂</li>
                <li>需补充额：0 t CO₂</li>
              </ul>
            </Col>
            <Col
              className="carbon-col"
              offset={4}
              xxs={24}
              xs={24}
              s={12}
              m={14}
            >
              <EcharsItem
                idroot="carbon-measure"
                option={fourthOption}
              ></EcharsItem>
            </Col>
            <Col
              className="carbon-col"
              offset={4}
              xxs={24}
              xs={24}
              s={12}
              m={14}
            >
              <MeasureList></MeasureList>
            </Col>
          </Row>
        </ShowCard>
      </Col>
    </Row>
  );
}
export default React.memo(Echarts);
