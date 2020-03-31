import React, { useState, useEffect } from 'react';
import { List } from '@alifd/next';
const listData = [
  {
    label: '风机电机侧轴承温度',
    data: '63.52℃'
  },
  {
    label: '风机叶轮侧轴承温度',
    data: '60.36℃'
  },
  {
    label: '电机绕组温度1',
    data: '79.94℃'
  },
  {
    label: '电机绕组温度2',
    data: '80.36℃'
  },
  {
    label: '电流',
    data: '23.22A'
  },
  {
    label: '转频',
    data: '26.322Hz'
  }
];
function Index() {
  const renderItem = () => {
    return listData.map(item => {
      return (
        <List.Item key={`fan${item.label}`} className="pan-list-item">
          <span>{item.label}</span>
          <span>{item.data}</span>
          {/* <span>50</span> */}
        </List.Item>
      );
    });
  };
  return <List>{renderItem()}</List>;
}
export default React.memo(Index);
