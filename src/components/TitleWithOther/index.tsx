import React, { useState, useEffect } from 'react';
function Index({ headerList }) {
  return (
    <section className="monitor-header">
      <div className="monitor-header1">
        <p className="electric-fan-header-title">{headerList.title}</p>
      </div>
    </section>
  );
}
export default React.memo(Index);
