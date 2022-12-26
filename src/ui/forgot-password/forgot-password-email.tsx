import React, { ChangeEvent, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useKeyDown } from 'hooks/use-key-down';

import { useSendOtp } from 'ui/forgot-password/hook/use-send-otp';

const ForgotPasswordEmail = ({ changeStep }: { changeStep(value: boolean): void }) => {
  const { sendOtp, error, setError } = useSendOtp();
  const { onKeyDown } = useKeyDown();

  const [email, setEmail] = useState<IForgotPasswordEmail>({ email: '' });

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });

    setError({});
  };

  return (
    <div className="email-content-wrapper" id="ForgotPasswordEmail">
      <Typography align="center" fontSize="24px" fontWeight="700" lineHeight="33px" marginBottom="24px" variant="body1">
        Forgotten Password
      </Typography>

      <Typography
        align="center"
        fontSize="14px"
        fontWeight="400"
        lineHeight="23px"
        marginBottom="64px"
        variant="body2"
        className="opacity7"
      >
        Please input you email and well send you an OTP code to
      </Typography>

      <TextField
        id="email"
        name="email"
        onChange={emailChangeHandler}
        onKeyDown={event => onKeyDown(event, 'Enter', () => sendOtp(email, changeStep))}
        size="small"
        label="Email"
        className="email-input"
        variant="outlined"
        type={'email'}
        autoComplete={email.email}
        error={!!error.email}
        helperText={error.email}
      />

      <Button size="large" variant="contained" onClick={() => sendOtp(email, changeStep)} id="Get-Code-btn">
        {tKeys('login')}
      </Button>
    </div>
  );
};

export default ForgotPasswordEmail;
