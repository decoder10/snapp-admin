import React, { FC } from 'react';

import { Typography } from '@mui/material';

import welcomeImage from 'assets/images/welcome-image.svg';

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
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
