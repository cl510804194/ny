import React, { useState, useEffect } from 'react';
import { Card } from '@alifd/next';

function Index({ label, data, desc, unit }) {
  return (
    <Card free className="table-card-container">
      <Card.Header
        className="table-card-header"
        title={label}
        // subTitle={desc}
      />
      <Card.Content>
        <span className="table-card-data">
          {data}
          {unit}
        </span>
        {/* <span>{unit}</span> */}
        {desc ? <span>{desc}</span> : null}
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
