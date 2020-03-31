import React, { useState, useEffect, useLayoutEffect } from 'react';
import TitleWithOther from '@/components/TitleWithOther';
import { Grid, List } from '@alifd/next';
import './index.scss';
import InfoTable from './component/InfoTable';
import InfoList from './component/InfoList';
import IconType from './component/IconType';
const { AMap } = window;
const { Row, Col } = Grid;
const headerList = {
  title: 'Real-time Monitoring'
};
//
const tableCardConfig = [
  {
    label: 'Pipe ID',
    data: 'L07KECIA',
    image: true
  },
  {
    label: 'Elevation(m)',
    data: '77.82'
  },
  {
    label: 'Flow(GPM)',
    data: '0.16',
    desc: '0.17',
    iconName: 'arrow-up'
  },
  {
    label: 'Velocity(FPS)',
    data: '0.16',
    desc: '0.02',
    iconName: 'switch'
  }
];
//icon
interface IIcon {
  title: string;
  className: string;
  values: Array<Number>;
}
const iconInfo1: IIcon = {
  title: 'Flow(GPM)',
  className: 'icon-class-pie',
  values: [0, 0.25, 0.5, 0.75, 1.0]
};

const iconInfo2: IIcon = {
  title: 'Pressure(PSI)',
  className: 'icon-class-line',
  values: [0, 25, 50, 75, 100]
};
function Index() {
  useLayoutEffect(() => {
    const map = new AMap.Map('amap', {
      resizeEnamapble: true,
      rotateEnable: true,
      pitchEnable: true,
      zoom: 17,
      pitch: 80,
      rotation: -15,
      viewMode: '3D', //开启3D视图,默认为关闭
      buildingAnimation: true, //楼块出现是否带动画

      expandZoomRange: true,
      zooms: [3, 20],
      center: [116.333926, 39.997245]
    });
    return () => {};
  }, []);
  return (
    <div id="zgyy-map">
      <TitleWithOther headerList={headerList}></TitleWithOther>
      <InfoTable infoTabList={tableCardConfig}></InfoTable>
      <Row className="infotable-container map-container">
        <Col>
          <IconType iconInfo={iconInfo1}></IconType>
        </Col>
        <Col>
          <IconType iconInfo={iconInfo2}></IconType>
        </Col>
      </Row>
      <Row
        className="infotable-container map-container"
        justify="space-between"
        gutter={5}
        wrap
      >
        <Col className="map-col" xxs={24} xs={24} s={24} m={16}>
          <div id="amap"></div>
        </Col>
        <Col className="map-col" xxs={24} xs={24} s={24} m={6}>
          <InfoList></InfoList>
        </Col>
      </Row>
    </div>
  );
}
export default React.memo(Index);
