import React, { ChangeEvent, FC, useState } from 'react';

import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import ResendTimer from 'core/resend-timer/resend-timer';

import { forgotPasswordFormConfig } from 'ui/forgot-password/forgot-password-config';
import { ForgotPasswordValidator } from 'ui/forgot-password/validator/forgot-password-validator';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ForgotPassword: FC = () => {
  const navigation = useNavigate();
  const [forgotPasswordData, setForgotPasswordData] = useState<IForgotPasswordFormFields>({
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [errors, setErrors] = useState<Partial<IForgotPasswordFormFields>>({});
  const validator = new ForgotPasswordValidator();

  const fgFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForgotPasswordData({ ...forgotPasswordData, ...{ [name]: value } });
  };

  const otpChangeHandler = (otp: string) => {
    setForgotPasswordData({ ...forgotPasswordData, ...{ otp: otp } });
  };

  const confirm = () => {
    const err = validator.validate(forgotPasswordData);

    if (_.size(err) === 0) {
      // to be continued
      navigation('/sign-in');
    } else {
      setErrors(err as IForgotPasswordFormFields);
    }
  };

  return (
    <section className="forgotPasswordWrapper">
      <div className="forgotPasswordContainer">
        <ThemeProvider theme={darkTheme}>
          <Typography variant="h4" align="center" marginBottom={2} style={{ color: '#FFFFFFB2' }}>
            Reset Password
          </Typography>

          <OtpInput
            value={forgotPasswordData.otp}
            onChange={otpChangeHandler}
            numInputs={4}
            inputStyle="inputStyle"
            containerStyle="otpContainer"
            hasErrored={!!errors.otp}
            errorStyle={{ border: '1px solid red' }}
          />

          <ResendTimer />

          {forgotPasswordFormConfig.map(item => {
            const { key, label, type } = item;
            return (
              <TextField
                type={type}
                className="forgotPasswordInput"
                key={key}
                label={label}
                onChange={fgFormChangeHandler}
                variant="outlined"
                name={key}
                error={!!errors[key]}
                helperText={errors[key]}
              />
            );
          })}
          <Button className="forgotConfirmButton" variant="contained" onClick={confirm}>
            Confirm
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default ForgotPassword;
