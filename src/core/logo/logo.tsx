import React, { memo } from 'react';

import logo from 'assets/images/logo.svg';

export const Logo = memo(function Logo() {
  return (
    <div className="logo-wrap">
      <img src={logo} alt="Game Logo" />

      <p>EXTREME</p>
    </div>
  );
});
