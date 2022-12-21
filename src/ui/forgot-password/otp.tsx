import React, { FC, useState } from 'react';

import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import OtpInput from 'react-otp-input';

import ResendTimer from 'core/resend-timer/resend-timer';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import { OtpValidator } from 'ui/forgot-password/validator/otpValidator';

const Otp: FC = () => {
  const [otp, setOtp] = useState<IOtp>({ otp: '' });
  const [error, setError] = useState<Partial<IOtp>>({});
  const validator = new OtpValidator();

  const otpChangeHandler = (otp: string) => {
    setOtp({ otp: otp });
  };

  const resend = () => {
    setOtp({ otp: '' });
  };

  const confirm = () => {
    const err = validator.validate(otp);
    if (_.size(err) === 0) {
      // to be continued
    } else {
      setError(err as IOtp);
    }
  };

  const number = '08768262427';
  return (
    <section className="otp-wrapper">
      <div className="otp-container">
        <MemoizedFormLogo />
        <div className="otp-content-wrapper">
          <Typography align="center" className="otp-title-text">
            Enter the OTP Code
          </Typography>
          <Typography align="center" className="otp-second-text">
            We've sent you an OTP code to
          </Typography>
          <Typography align="center" className="otp-phoneNumber-text">
            {number}
          </Typography>

          <OtpInput
            value={otp.otp}
            onChange={otpChangeHandler}
            numInputs={4}
            inputStyle="otp-input"
            containerStyle="otp-container-style"
            hasErrored={!error}
            errorStyle={{ border: '1px solid red' }}
            shouldAutoFocus
          />

          <ResendTimer resend={resend} />

          <Button className="otp-button" onClick={confirm}>
            confirm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Otp;
