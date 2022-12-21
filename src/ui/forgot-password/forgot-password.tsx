import React, { FC } from 'react';

import Otp from 'ui/forgot-password/otp';

const ForgotPassword: FC = () => {
  return (
    <section className="forgot-password-wrapper">
      <Otp />
      {/* <ForgotPasswordForm /> */}
    </section>
  );
};

export default ForgotPassword;
