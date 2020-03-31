import React, { useState, useEffect } from 'react';
import { List } from '@alifd/next';
function Index() {
  const renderItem = () => {
    return [1, 2, 3, 4, 5, 6, 7].map(item => {
      return (
        <List.Item key={`falut${item}`} className="falut-list-item">
          <span className="falut-list-number">{item}</span>
          <span>{item}号车间</span>
          <span>50</span>
        </List.Item>
      );
    });
  };
  return <List header={<div>故障数量排名</div>}>{renderItem()}</List>;
}
export default React.memo(Index);
