import React, { memo } from 'react';

import companyLogo from 'assets/images/loader-company-logo.svg';
import gameLogo from 'assets/images/loader-game-logo.svg';

interface IProps {
  hasTransitionedIn: boolean;
  connected: boolean;
}

function Loader({ hasTransitionedIn, connected }: IProps) {
  return (
    <div className={`loader-wrap ${hasTransitionedIn && 'animate'} ${connected ? 'visible' : 'transition'}`}>
      <div className="loader-content">
        <img src={gameLogo} alt="game logo" />

        <div className="loader">
          <div className="loader-bar"></div>
        </div>

        <img src={companyLogo} alt="company logo" />
      </div>
    </div>
  );
}

export default memo(Loader);
