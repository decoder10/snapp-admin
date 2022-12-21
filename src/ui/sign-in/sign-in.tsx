import { FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { MemoizedFormLogo } from 'statics/form-logo/form-logo';

import { useSignIn } from 'ui/sign-in/hook/use-sign-in';
import SignInForm from 'ui/sign-in/sign-in-form';

const SignIn: FC = () => {
  const [signIn, errors, setErrors] = useSignIn();

  const userDataRef = useRef<IAuthFormFields>({
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      signIn(userDataRef.current, rememberMe);
    }
  };

  return (
    <section className="sign-in-wrapper">
      <div className="sign-in-container">
        <MemoizedFormLogo />

        <div className="form-wrapper">
          <Typography variant="h4" align="center" className="sign-in-login-title">
            {tKeys('login')}
          </Typography>

          <SignInForm
            errors={errors}
            onEnter={handleKeyDown}
            onChange={data => (userDataRef.current = data)}
            updateErrors={setErrors}
          />

          <div className="link-checkbox-wrapper">
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
              label={tKeys('rememberMe')}
            />
            <Link className="forgot-password" to={'/forgot-password'}>
              {tKeys('forgotPassword')}
            </Link>
          </div>

          <Button variant="contained" onClick={() => signIn(userDataRef.current, rememberMe)} className="submit-button">
            {tKeys('login')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
