import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Tab, Button, Icon } from '@alifd/next';
import LoadDialog from '../LoadDialog';
const { RangePicker } = DatePicker;
function Index({ headerList }) {
  const [visible, setVisible] = useState(false);
  const showVisible = v => {
    setVisible(v);
  };
  return (
    <section className="monitor-header">
      <div className="monitor-header1">
        <p className="electric-fan-header-title">{headerList.title}</p>
        <div className="check-button-group">
          <Button onClick={showVisible} size="small" type="normal">
            <Icon type="ellipsis" />
          </Button>
          <span className="forecast-date">{headerList.date}</span>
          {/* <RangePicker showTime /> */}
        </div>
      </div>
      <LoadDialog
        showVisible={showVisible}
        diaLogVisible={visible}
      ></LoadDialog>
    </section>
  );
}
export default React.memo(Index);
