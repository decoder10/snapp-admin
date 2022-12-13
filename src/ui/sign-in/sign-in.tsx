import { ChangeEvent, FC, useState } from 'react';

import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { useSignIn } from 'ui/sign-in/hook/use-sign-in';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const SignIn: FC = () => {
  const [signIn, errors] = useSignIn();

  const [userData, setUserData] = useState<IAuthFormFields>({
    userName: '',
    password: '',
  });

  const signInFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, ...{ [name]: value } });
  };

  return (
    <section className="signInWrapper">
      <div className="container">
        <ThemeProvider theme={darkTheme}>
          <Typography variant="h4" align="center" marginBottom={2} style={{ color: 'white' }}>
            Sign In
          </Typography>

          <TextField
            name="userName"
            onChange={signInFormChangeHandler}
            value={userData.userName}
            label="UserName"
            variant="outlined"
            className="input"
            error={!!errors.userName}
            helperText={errors.userName}
          />

          <TextField
            name="password"
            onChange={signInFormChangeHandler}
            value={userData.password}
            label="Password"
            variant="outlined"
            className="input"
            error={!!errors.password}
            helperText={errors.password}
          />

          <Link className="forgotPassword" to={'/forgot-password'}>
            Forgot Password?
          </Link>

          <Button variant="contained" onClick={() => signIn(userData)}>
            Login
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default SignIn;
