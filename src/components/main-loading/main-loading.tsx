import React, { FunctionComponent, memo } from 'react';

const MainLoading: FunctionComponent = () => {
  return <div className="main-loading">main loading...</div>;
};

export const MemoizedMainLoading = memo(MainLoading);
