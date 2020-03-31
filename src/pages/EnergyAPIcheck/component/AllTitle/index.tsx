import React, { useState, useEffect } from 'react';
import { Divider, Icon } from '@alifd/next';
function Index() {
  return (
    <>
      <div className="api-echart-item-title">
        <span className="api-echart-item-title-first">能耗费用分项计量</span>
        <span>
          计划总费用：￥164736 &nbsp; 实际总费用：￥164736 &nbsp; 同比 &nbsp;
          12% <Icon className="api-absis-icon-up" type="arrow-up" />
        </span>
      </div>
      <Divider></Divider>
    </>
  );
}
export default React.memo(Index);
