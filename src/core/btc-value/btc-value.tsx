import { memo } from 'react';

export const BtcValue = memo(function BtcValue() {
  return (
    <div className="btc-value-wrap">
      <p className="number">$22,254.</p>

      <div className="rounded-number-wrap">
        <p className="rounded-number">97</p>
      </div>
    </div>
  );
});
