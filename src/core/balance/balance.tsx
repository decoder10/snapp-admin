import React from 'react';

import { tKeys } from 'translations/translation-keys';

export function Balance() {
  return (
    <div className="amount-wrap">
      <h3>{tKeys('balance')}</h3>
      <p>15000 AMD</p>
    </div>
  );
}
