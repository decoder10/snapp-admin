import { ChangeEvent, FC, useState } from 'react';

import { Button, TextField } from '@mui/material';
// import { Simulate } from 'react-dom/test-utils';
import _ from 'lodash';

import { useAppDispatch } from 'configs/hooks';

import { userAuthenticate } from 'reducers/authentication';

import { SignInValidator } from 'ui/sign-in/sign-in-validator';

const validator = new SignInValidator();

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const [errorResult, setErrorResult] = useState<Partial<IAuthFormFields>>({});
  const [userData, setUserData] = useState<IAuthFormFields>({
    userName: '',
    password: '',
  });

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, ...{ [name]: value } });
  };

  const handleSubmit = () => {
    const err = validator.validate(userData);

    if (_.size(err) === 0) {
      dispatch(userAuthenticate(userData));
    } else {
      setErrorResult(err as IAuthFormFields);
    }
  };

  return (
    <section className="signInWrapper">
      <div className="container">
        <h1>Sign In</h1>
        <TextField
          name="userName"
          onChange={handler}
          value={userData.userName}
          label="UserName"
          variant="outlined"
          className="input"
          error={!!errorResult.userName}
          helperText={errorResult.userName}
        />
        <TextField
          name="password"
          onChange={handler}
          value={userData.password}
          label="Password"
          variant="outlined"
          className="input"
          error={!!errorResult.password}
          helperText={errorResult.password}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
