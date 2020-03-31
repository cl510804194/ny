import React, { useState, useEffect } from 'react';
import { List } from '@alifd/next';
function Index() {
  return (
    <List
      size="small"
      header={
        <img
          className="echars-image"
          src={require('../../images/qytpl.png').default}
        />
      }
    >
      <List.Item>1 &nbsp; 工厂 &nbsp;&nbsp; 12345t CO₂</List.Item>
      <List.Item>2 &nbsp; 数据中心 &nbsp;&nbsp; 10345 t CO₂</List.Item>
      <List.Item>3 &nbsp; 孵化器 &nbsp;&nbsp; 6445 t CO₂</List.Item>
      <List.Item>4 &nbsp; 1号楼 &nbsp;&nbsp; 5421 t CO₂</List.Item>
      <List.Item>5 &nbsp; 2号楼 &nbsp;&nbsp; 5245 t CO₂</List.Item>
      <List.Item>6 &nbsp; 3号楼 &nbsp;&nbsp; 4682 t CO₂</List.Item>
    </List>
  );
}
export default React.memo(Index);
