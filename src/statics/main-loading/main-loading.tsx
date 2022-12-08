import React, { FC, memo } from 'react';

import { CircularProgress } from '@mui/material';

const MainLoading: FC = () => {
  return (
    <div className="main-loading" style={{ backgroundColor: '#2d2d2d' }}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export const MemoizedMainLoading = memo(MainLoading);
