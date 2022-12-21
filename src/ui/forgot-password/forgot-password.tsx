import React, { FC } from 'react';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import ForgotPasswordEmail from 'ui/forgot-password/forgot-password-email';

const ForgotPassword: FC = () => {
  return (
    <section className="forgot-password-wrapper">
      <div className="forgot-password-container">
        <MemoizedFormLogo />
        {/* <Otp /> */}
        <ForgotPasswordEmail />
      </div>
    </section>
  );
};

export default ForgotPassword;
