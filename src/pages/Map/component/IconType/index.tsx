import React, { useState, useEffect } from 'react';
import { Item } from '@alifd/next/types/breadcrumb';

function Index({ iconInfo }) {
  const renderItem = () => {
    return iconInfo.values.map((item: number, index: number) => {
      return (
        <li key={item}>
          <span
            className={`icontype-left icontype-item${index + 1}  ${
              iconInfo.className
            }`}
          ></span>
          <span className="icontype-right">{item}</span>
        </li>
      );
    });
  };
  return (
    <div className="icontype-container">
      <p className="iontype-title">{iconInfo.title}</p>
      <ul className="iontype-iconls">{renderItem()}</ul>
    </div>
  );
}
export default React.memo(Index);
