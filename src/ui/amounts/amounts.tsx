import React from 'react';

import { Balance } from 'core/balance/balance';
import { TotalBet } from 'core/total-bet/total-bet';

export function Amounts() {
  return (
    <div className="amounts-wrap">
      <Balance />

      <TotalBet />
    </div>
  );
}
