import React, { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { InputAdornment, TextField } from '@mui/material';

import Eye from 'core/eye/eye';

import { signInFormConfig } from 'ui/sign-in/sign-in-form-config';

interface IProps {
  errors: Partial<IAuthFormFields>;
  onEnter(event: { key: string }): void;
  onChange(finalData: IAuthFormFields): void;
}

const SignInForm: FC<IProps> = ({ errors, onEnter, onChange }) => {
  const [userData, setUserData] = useState<IAuthFormFields>({
    email: '',
    password: '',
  });

  const formFieldsRef = useRef<IRefAuthFormFields>({
    email: null,
    password: null,
  });

  const signInFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const finalData = { ...userData, ...{ [name]: value } };

    setUserData(finalData);
    onChange(finalData);
  };

  return (
    <form>
      {signInFormConfig.map((item, index) => {
        const { key, label, type, rightIcon } = item;

        return (
          <TextField
            fullWidth={true}
            inputRef={ref => (formFieldsRef.current[key] = ref)}
            key={key}
            name={key}
            onChange={signInFormChangeHandler}
            size="small"
            value={userData[key]}
            label={tKeys(label)}
            variant="outlined"
            className="sign-in-input"
            error={!!errors[key]}
            helperText={errors[key]}
            type={type}
            onKeyDown={onEnter}
            autoComplete={key}
            InputProps={{
              endAdornment: rightIcon ? (
                <InputAdornment position="end">
                  <Eye
                    makeVisible={value => {
                      if (formFieldsRef.current && formFieldsRef.current[key]) {
                        formFieldsRef.current[key]!.type = value ? 'text' : 'password';
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
  );
};

export default SignInForm;
