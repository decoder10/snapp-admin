import React, { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, InputAdornment, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useKeyDown } from 'hooks/use-key-down';

import Eye from 'core/eye/eye';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import { useNewPassword } from 'ui/new-password/hook/use-new-password';
import { forgotPasswordFormConfig } from 'ui/new-password/new-password-config';

const NewPassword: FC = () => {
  const { setNewPassword, errors, setErrors } = useNewPassword();
  const { onKeyDown } = useKeyDown();

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

    delete errors[name as TKeyOf<Partial<IForgotPasswordFormFields>>];
    setErrors(errors);
  };

  return (
    <section className="new-password-wrapper">
      <div className="new-password-container" id="new-password">
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
                  onKeyDown={event => onKeyDown(event, 'Enter', () => setNewPassword(forgotPasswordData))}
                  variant="outlined"
                  name={key}
                  error={!!errors[key]}
                  helperText={errors[key]}
                  autoComplete={forgotPasswordData[key]}
                  InputProps={{
                    endAdornment: rightIcon ? (
                      <InputAdornment position="end">
                        <Eye
                          id={`${key}-eye`}
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
            id="confirm-btn"
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
