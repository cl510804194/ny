import React, { useState, useEffect } from 'react';
import { Card } from '@alifd/next';
function Index({ label, data, unit, desc, image }) {
  return (
    <Card free className="table-card-container">
      <Card.Header
        className="table-card-header"
        title={<img src={image} alt="" />}
        subTitle={desc}
      />
      <Card.Content>
        <span className="table-card-title">{label}&nbsp;&nbsp;</span>
        <span className="table-card-data">{data}</span>
        <span className="table-card-data">{unit}</span>
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
