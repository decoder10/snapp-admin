import React, { FC, memo, useState } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

const Loader: FC = () => {
  const [isLoading] = useState<boolean>(false);

  return isLoading ? (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : null;
};

export const MemoizedLoader = memo(Loader);
