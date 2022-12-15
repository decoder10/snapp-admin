import React, { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, createTheme, InputAdornment, TextField, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import Eye from 'core/eye/eye';
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
  const forgotPasswordRef = useRef<IRefForgotPasswordFormFields>({
    password: null,
    confirmPassword: null,
    otp: null,
  });
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

  const resend = () => {
    setForgotPasswordData({ ...forgotPasswordData, ...{ otp: '' } });
    // to be continued
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
            shouldAutoFocus
          />

          <ResendTimer resend={resend} />

          {forgotPasswordFormConfig.map(item => {
            const { key, label, type, rightIcon } = item;
            return (
              <TextField
                inputRef={ref => (forgotPasswordRef.current[key] = ref)}
                type={type}
                className="forgotPasswordInput"
                key={key}
                label={label}
                onChange={fgFormChangeHandler}
                variant="outlined"
                name={key}
                error={!!errors[key]}
                helperText={errors[key]}
                InputProps={{
                  endAdornment: rightIcon ? (
                    <InputAdornment position="end">
                      <Eye
                        makeVisible={value => {
                          if (forgotPasswordRef.current && forgotPasswordRef.current[key]) {
                            forgotPasswordRef.current[key]!.type = value ? 'text' : 'password';
                          }
                        }}
                      />
                    </InputAdornment>
                  ) : null,
                }}
              />
            );
          })}
          <Button className="forgotConfirmButton" variant="contained" onClick={confirm}>
            {tKeys('confirm')}
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default ForgotPassword;
