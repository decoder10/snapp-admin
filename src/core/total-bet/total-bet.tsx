import React from 'react';

import { tKeys } from 'translations/translation-keys';

export function TotalBet() {
  return (
    <div className="amount-wrap">
      <h3>{tKeys('totalBet')}</h3>
      <p>15000 AMD</p>
    </div>
  );
}
