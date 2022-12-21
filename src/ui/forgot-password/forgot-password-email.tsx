import React, { ChangeEvent, useState } from 'react';

import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

import { ForgotPasswordEmailValidator } from 'ui/forgot-password/validator/forgot-password-email-validator';

const ForgotPasswordEmail = ({ changeStep }: { changeStep(value: boolean): void }) => {
  const [email, setEmail] = useState<IForgotPasswordEmail>({ email: '' });
  const [error, setError] = useState<Partial<IForgotPasswordEmail>>({});

  const validator = new ForgotPasswordEmailValidator();

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });
  };

  const onGetCode = () => {
    const err = validator.validate(email);
    if (_.size(err) === 0) {
      // to be continued
      changeStep(true);
    } else {
      setError(err as IForgotPasswordEmail);
    }
  };

  return (
    <div className="email-content-wrapper">
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
        name="email"
        onChange={emailChangeHandler}
        size="small"
        label="Email"
        className="email-input"
        variant="outlined"
        type={'email'}
        autoComplete={email.email}
        error={!!error.email}
        helperText={error.email}
      />

      <Button variant="contained" onClick={onGetCode}>
        Get Code
      </Button>
    </div>
  );
};

export default ForgotPasswordEmail;
