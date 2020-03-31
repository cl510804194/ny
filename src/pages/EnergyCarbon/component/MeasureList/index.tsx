import React, { useState, useEffect } from 'react';
import { List, Icon } from '@alifd/next';
function Index() {
  return (
    <List className="carbon-measure-list" size="small">
      <List.Item>
        50% 1359 t CO₂ = 1731.21 kWh 同比12%{' '}
        <Icon className="api-absis-icon-up" type="arrow-up" />
      </List.Item>
      <List.Item>
        20% 1536 t CO₂ = 8084.21 m³ 同比12%{' '}
        <Icon className="api-absis-icon-up" type="arrow-up" />
      </List.Item>
      <List.Item>
        12% 1268 t CO₂ = 1393.40 t 同比12%{' '}
        <Icon className="api-absis-icon-up" type="arrow-up" />
      </List.Item>
      <List.Item>
        10% 650 t CO₂ = 230 kWh 同比12%{' '}
        <Icon className="api-absis-icon-up" type="arrow-up" />
      </List.Item>
      <List.Item>
        5 &nbsp; 2号楼 &nbsp;&nbsp; 5245 t CO₂{' '}
        <Icon className="api-absis-icon-down" type="arrow-down" />
      </List.Item>
      <List.Item>
        <span> 8% 450 t CO₂ = 130 kWh 同比12%</span>

        <Icon className="api-absis-icon-down" type="arrow-down" />
      </List.Item>
    </List>
  );
}
export default React.memo(Index);
