import { FC } from 'react';

import { Button, TextField } from '@mui/material';

const SignIn: FC = () => {
  return (
    <section className="signInWrapper">
      <div className="container">
        <h1>Sign In</h1>
        <TextField label="UserName" variant="outlined" className="input" />
        <TextField label="Password" variant="outlined" className="input" />
        <Button
          variant="contained"
          onClick={() => {
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
