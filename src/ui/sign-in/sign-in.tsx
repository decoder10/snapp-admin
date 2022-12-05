import { FC } from 'react';

import { Button, TextField } from '@mui/material';

import { useAppDispatch } from 'configs/hooks';

import { userAuthenticate } from 'reducers/authentication';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="signInWrapper">
      <div className="container">
        <h1>Sign In</h1>
        <TextField label="UserName" variant="outlined" className="input" />
        <TextField label="Password" variant="outlined" className="input" />
        <Button
          variant="contained"
          onClick={() => {
            dispatch(userAuthenticate({ username: 'aaa', password: 'dddd' }));
            // eslint-disable-next-line no-alert
            alert('you are login');
          }}
        >
          Login
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
