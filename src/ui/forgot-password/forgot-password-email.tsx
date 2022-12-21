import React, { ChangeEvent, FC, useState } from 'react';

import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const ForgotPasswordEmail: FC = () => {
  const [email, setEmail] = useState<string>('');

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="email-content-wrapper">
      <Typography align="center" fontSize="24px" fontWeight="700" lineHeight="33px" marginBottom="24px">
        Forgotten Password
      </Typography>
      <Typography align="center" fontSize="14px" fontWeight="400" lineHeight="23px" marginBottom="64px">
        Please input you email and well send you an OTP code to
      </Typography>

      <TextField
        name="email"
        onChange={emailChangeHandler}
        size="small"
        value={email}
        label="Email"
        className="email-input"
        variant="outlined"
        type={'email'}
        InputLabelProps={{ shrink: true }}
      />

      <Button variant="contained">Get Code</Button>
    </div>
  );
};

export default ForgotPasswordEmail;
