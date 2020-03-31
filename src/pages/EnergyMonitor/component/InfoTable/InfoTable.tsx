import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { Grid } from '@alifd/next';
const { Row, Col } = Grid;
import TableCard from '../TableCard';
function InfoTable({ infoTabList }) {
  const renderCard = () => {
    return infoTabList.map(item => {
      return (
        <Col key={`${item.label}`} xxs={24} xs={12} s={8} m={4}>
          <TableCard {...item}></TableCard>
        </Col>
      );
    });
  };
  return (
    <Row className="infotable-container" wrap gutter={5}>
      {renderCard()}
    </Row>
  );
}
export default React.memo(InfoTable);
