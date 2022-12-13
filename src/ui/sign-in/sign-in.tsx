import { ChangeEvent, FC, useState } from 'react';

import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { useSignIn } from 'ui/sign-in/hook/use-sign-in';
import { signInFormConfig } from 'ui/sign-in/sign-in-form-config';

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

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      signIn(userData);
    }
  };

  return (
    <section className="signInWrapper">
      <div className="container">
        <ThemeProvider theme={darkTheme}>
          <Typography variant="h4" align="center" marginBottom={2} style={{ color: 'white' }}>
            Sign In
          </Typography>

          {signInFormConfig.map(item => {
            const { key, label, type } = item;

            return (
              <TextField
                key={key}
                name={key}
                onChange={signInFormChangeHandler}
                value={userData[key]}
                label={label}
                variant="outlined"
                className="input"
                error={!!errors[key]}
                helperText={errors[key]}
                type={type}
                onKeyDown={handleKeyDown}
              />
            );
          })}

          <Link to={'/forgot-password'}>Forgot Password</Link>

          <Button variant="contained" onClick={() => signIn(userData)}>
            Login
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default SignIn;
