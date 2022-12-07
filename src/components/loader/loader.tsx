import React, { FC, useState } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

const Loader: FC = () => {
  const [isLoading] = useState<boolean>(false);

  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
