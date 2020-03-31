import React, { useState, useEffect } from 'react';

import './index.scss';
import FalutTimeAndType from './component/FalutTypeAndTime';
import InfoTable from './component/InfoTable';
import FaulTable from './component/FaultTable';

function Index() {
  return (
    <div id="collect">
      <InfoTable></InfoTable>
      <FalutTimeAndType></FalutTimeAndType>
      <FaulTable></FaulTable>
    </div>
  );
}
export default React.memo(Index);
