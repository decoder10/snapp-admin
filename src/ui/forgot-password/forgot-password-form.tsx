import React, { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, InputAdornment, TextField } from '@mui/material';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import Eye from 'core/eye/eye';

import { forgotPasswordFormConfig } from 'ui/forgot-password/forgot-password-config';
import { ForgotPasswordValidator } from 'ui/forgot-password/validator/forgot-password-validator';

const ForgotPasswordForm: FC = () => {
  const navigation = useNavigate();
  const forgotPasswordRef = useRef<IRefForgotPasswordFormFields>({
    password: null,
    confirmPassword: null,
  });
  const [forgotPasswordData, setForgotPasswordData] = useState<IForgotPasswordFormFields>({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<IForgotPasswordFormFields>>({});
  const validator = new ForgotPasswordValidator();

  const fgFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForgotPasswordData({ ...forgotPasswordData, ...{ [name]: value } });
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
    <div className="forgot-password-container">
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
      <Button className="forgot-confirm-button" variant="contained" onClick={confirm}>
        {tKeys('confirm')}
      </Button>
    </div>
  );
};

export default ForgotPasswordForm;
