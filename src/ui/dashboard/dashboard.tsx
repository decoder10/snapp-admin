import React, { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Typography } from '@mui/material';
import { useSnackbar, VariantType } from 'notistack';

import welcomeImage from 'assets/images/welcome-image.svg';

const Dashboard: FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', {
      variant,
      action: snackbarId => (
        <IconButton
          aria-label="delete"
          onClick={() => {
            closeSnackbar(snackbarId);
          }}
        >
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <Button onClick={handleClickVariant('success')}>Show success snackbar</Button> {/* TODO remove */}
        <img src={welcomeImage} alt="Welcome Image" />
      </div>
      <footer className="dashboard-footer">
        <Typography fontSize={12}>Verison 2.0</Typography>
        <Typography fontSize={12}>Last Login: 19/12/2022 | 18:34</Typography>
      </footer>
    </div>
  );
};

export default Dashboard;
