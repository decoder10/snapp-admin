import React, { FC } from 'react';

import welcomeImage from 'assets/images/welcome-image.svg';

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <img src={welcomeImage} alt="Welcome Image" />
    </div>
  );
};

export default Dashboard;
