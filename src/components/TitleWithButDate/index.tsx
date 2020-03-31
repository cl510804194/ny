import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Tab, Button } from '@alifd/next';
const { RangePicker } = DatePicker;
function Index({ headerList }) {
  return (
    <section className="monitor-header">
      <div className="monitor-header1">
        {headerList.type ? (
          <p className="electric-fan-header-title">{headerList.title}</p>
        ) : (
          <Button type="normal">{headerList.title}</Button>
        )}

        <div className="check-button-group">
          <Button.Group>
            <Button type="primary">{headerList.leftButton}</Button>
            <Button type="normal">{headerList.rightButton}</Button>
          </Button.Group>
          <RangePicker showTime />
        </div>
      </div>
    </section>
  );
}
export default React.memo(Index);
