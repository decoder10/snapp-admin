import React, { FC, memo } from 'react';

const MainLoading: FC = () => {
  return <div className="main-loading">main loading...</div>;
};

export const MemoizedMainLoading = memo(MainLoading);
