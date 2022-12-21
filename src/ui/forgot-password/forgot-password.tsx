import React, { FC, useState } from 'react';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import ForgotPasswordEmail from 'ui/forgot-password/forgot-password-email';
import Otp from 'ui/forgot-password/otp';

const ForgotPassword: FC = () => {
  const [otpVIew, setOtpView] = useState<boolean>(false);
  return (
    <section className="forgot-password-wrapper">
      <div className="forgot-password-container">
        <MemoizedFormLogo />
        {otpVIew ? <Otp /> : <ForgotPasswordEmail changeStep={setOtpView} />}
      </div>
    </section>
  );
};

export default ForgotPassword;
