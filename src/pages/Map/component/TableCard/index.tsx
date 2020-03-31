import React, { useState, useEffect } from 'react';
import { Card, Icon } from '@alifd/next';

function Index({ label, data, desc, image, iconName }) {
  return (
    <Card free className="table-card-container">
      <Card.Header
        className="table-card-header"
        title={label}
        // subTitle={desc}
      />
      <Card.Content>
        {image ? (
          <img
            className="map-img"
            src={require('../../images/pipe.png')}
            alt=""
          />
        ) : null}
        <span className="table-card-data">{data}</span>
        {/* <span>{unit}</span> */}
        {desc ? (
          <div className="map-desc">
            <span>|</span>
            <span>prediction</span>
            <Icon className="api-absis-icon-up" type={iconName} />
            <span className="map-desc-data">{desc}</span>
          </div>
        ) : null}
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
