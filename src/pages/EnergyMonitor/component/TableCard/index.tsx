import React, { useState, useEffect } from 'react';
import { Card } from '@alifd/next';
function Index({ label, data, unit, desc, real }) {
  const [value, setvalue] = useState(data);
  useEffect(() => {
    if (!real) {
      return;
    }
    const timer = setInterval(() => {
      const random = (Math.random() * 10) | 0;
      const all = value + random;
      setvalue(all);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [value]);
  return (
    <Card free className="table-card-container">
      <Card.Header
        className="table-card-header"
        title={label}
        subTitle={desc}
      />
      <Card.Content>
        <span className="table-card-data">{value}</span>
        <span>{unit}</span>
      </Card.Content>
    </Card>
  );
}
export default React.memo(Index);
