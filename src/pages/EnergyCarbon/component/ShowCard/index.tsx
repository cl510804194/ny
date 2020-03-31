import React, { useState, useEffect } from 'react';
import { Select, Divider, Grid, Table, Card } from '@alifd/next';
const { Row, Col } = Grid;
const dataSource = [];
function Index(props: { children?; title }) {
  const { children, title } = props;
  return (
    <Card free>
      <Card.Header title={title} subTitle={<Divider></Divider>} />
      {/* <Card.Divider /> */}
      <Card.Content>{children}</Card.Content>
    </Card>
  );
}
export default React.memo(Index);
