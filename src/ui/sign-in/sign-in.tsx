import { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Eye from 'core/eye/eye';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import { useSignIn } from 'ui/sign-in/hook/use-sign-in';
import { signInFormConfig } from 'ui/sign-in/sign-in-form-config';

const SignIn: FC = () => {
  const formFieldsRef = useRef<IRefAuthFormFields>({
    email: null,
    password: null,
  });

  const [signIn, errors] = useSignIn();

  const [userData, setUserData] = useState<IAuthFormFields>({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const signInFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, ...{ [name]: value } });
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      signIn(userData, rememberMe);
    }
  };

  return (
    <section className="sign-in-wrapper">
      <div className="sign-in-container">
        <MemoizedFormLogo />

        <div className="form-wrapper">
          <Typography variant="h4" align="center" className="sign-in-login-title">
            Login
          </Typography>

          <form>
            {signInFormConfig.map(item => {
              const { key, label, type, rightIcon } = item;

              return (
                <TextField
                  inputRef={ref => (formFieldsRef.current[key] = ref)}
                  key={key}
                  name={key}
                  onChange={signInFormChangeHandler}
                  size="small"
                  value={userData[key]}
                  label={label}
                  variant="outlined"
                  className="sign-in-input"
                  error={!!errors[key]}
                  helperText={errors[key]}
                  type={type}
                  onKeyDown={handleKeyDown}
                  autoComplete={userData[key]}
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

          <div className="link-checkbox-wrapper">
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
              label="Remember me"
            />
            <Link className="forgot-password" to={'/forgot-password'}>
              Forgot Password?
            </Link>
          </div>

          <Button variant="contained" onClick={() => signIn(userData, rememberMe)} className="submit-button">
            {tKeys('login')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
