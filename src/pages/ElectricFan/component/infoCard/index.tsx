import React, { useState, useEffect } from 'react';
import { Card, Icon, Divider, Grid, Select } from '@alifd/next';
const { Col, Row } = Grid;
function Index({ children, title, hasSelect }) {
  return (
    <Card className="fan-card" free>
      <Card.Header
        title={title}
        extra={hasSelect ? <Select placeholder={hasSelect}></Select> : null}
      />
      <Card.Content>{children}</Card.Content>
    </Card>
  );
}
export default React.memo(Index);
