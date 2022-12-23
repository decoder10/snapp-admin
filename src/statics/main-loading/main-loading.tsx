import React, { FC, memo } from 'react';

import mainLoading from 'assets/images/main-loading.svg';

const MainLoading: FC = () => {
  return (
    <div className="main-loading">
      <img src={mainLoading} alt="Snapp loading" />
    </div>
  );
};

export const MemoizedMainLoading = memo(MainLoading);
