import React, { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, InputAdornment, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import Eye from 'core/eye/eye';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import { useNewPassword } from 'ui/new-password/hook/use-new-password';
import { forgotPasswordFormConfig } from 'ui/new-password/new-password-config';

const NewPassword: FC = () => {
  const [setNewPassword, errors] = useNewPassword();

  const forgotPasswordRef = useRef<IRefForgotPasswordFormFields>({
    password: null,
    confirmPassword: null,
  });

  const [forgotPasswordData, setForgotPasswordData] = useState<IForgotPasswordFormFields>({
    password: '',
    confirmPassword: '',
  });

  const fgFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForgotPasswordData({ ...forgotPasswordData, ...{ [name]: value } });
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      setNewPassword(forgotPasswordData);
    }
  };

  return (
    <section className="new-password-wrapper">
      <div className="new-password-container">
        <MemoizedFormLogo />

        <div className="new-password-form-container">
          <Typography
            align="center"
            fontSize="20px"
            fontWeight="500"
            lineHeight="32px"
            marginBottom="72px"
            variant="body2"
          >
            Set New Password
          </Typography>

          <form>
            {forgotPasswordFormConfig.map(item => {
              const { key, label, type, rightIcon } = item;

              return (
                <TextField
                  fullWidth={true}
                  inputRef={ref => (forgotPasswordRef.current[key] = ref)}
                  type={type}
                  className="new-password-input"
                  key={key}
                  label={label}
                  onChange={fgFormChangeHandler}
                  onKeyDown={handleKeyDown}
                  variant="outlined"
                  name={key}
                  error={!!errors[key]}
                  helperText={errors[key]}
                  autoComplete={forgotPasswordData[key]}
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
          </form>

          <Button
            className="forgot-confirm-button"
            variant="contained"
            onClick={() => setNewPassword(forgotPasswordData)}
          >
            {tKeys('confirm')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewPassword;
