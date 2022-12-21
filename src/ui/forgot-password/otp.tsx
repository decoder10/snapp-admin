import React, { FC, useState } from 'react';

import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import OtpInput from 'react-otp-input';

import ResendTimer from 'core/resend-timer/resend-timer';

import { OtpValidator } from 'ui/forgot-password/validator/otp-validator';

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
    <div className="otp-content-wrapper">
      <Typography align="center" fontSize="20px" fontWeight="500" lineHeight="32px" marginBottom="2px" variant="body2">
        Enter the OTP Code
      </Typography>

      <Typography
        align="center"
        fontSize="14px"
        fontWeight="400"
        lineHeight="23px"
        marginBottom="4px"
        variant="body2"
        className="opacity7"
      >
        We've sent you an OTP code to
      </Typography>

      <Typography align="center" fontSize="16px" fontWeight="700" lineHeight="27px" marginBottom="48px" variant="body2">
        {number}
      </Typography>

      <OtpInput
        value={otp.otp}
        onChange={otpChangeHandler}
        numInputs={4}
        inputStyle="otp-input"
        containerStyle="otp-container-style"
        hasErrored={!!error.otp}
        errorStyle={{ border: '1px solid red' }}
        shouldAutoFocus
      />

      <ResendTimer resend={resend} />

      <Button onClick={confirm} variant="contained">
        confirm
      </Button>
    </div>
  );
};

export default Otp;
