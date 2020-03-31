import React, { useState, useEffect } from 'react';
// import Img from '@icedesign/img';
function Index({ title, image }) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="echarts-item-container">
      <p className="echart-item-title">{title}</p>
      <img className="echars-image" src={image} alt={title} />
    </div>
  );
}
export default React.memo(Index);
