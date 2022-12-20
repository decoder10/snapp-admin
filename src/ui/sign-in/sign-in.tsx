import { ChangeEvent, FC, useRef, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import {
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  InputAdornment,
  TextField,
  ThemeProvider,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Eye from 'core/eye/eye';

import { useSignIn } from 'ui/sign-in/hook/use-sign-in';
import { signInFormConfig } from 'ui/sign-in/sign-in-form-config';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const SignIn: FC = () => {
  const formFieldsRef = useRef<IRefAuthFormFields>({
    userName: null,
    password: null,
  });

  const [signIn, errors] = useSignIn();

  const [userData, setUserData] = useState<IAuthFormFields>({
    userName: '',
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
    <section className="signIn-wrapper">
      <div className="container">
        <ThemeProvider theme={darkTheme}>
          <Typography variant="h4" align="center" marginBottom={2} style={{ color: 'white' }}>
            Sign In
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
                  value={userData[key]}
                  label={label}
                  variant="outlined"
                  className="input"
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
          <Link className="forgot-password" to={'/forgot-password'}>
            Forgot Password?
          </Link>

          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
            label="Label"
          />
          <Button variant="contained" onClick={() => signIn(userData, rememberMe)} className="submit-button">
            {tKeys('login')}
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default SignIn;
