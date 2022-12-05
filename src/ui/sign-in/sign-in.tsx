import { ChangeEvent, FC, useState } from 'react';

import { Button, TextField } from '@mui/material';

import { useAppDispatch } from 'configs/hooks';

import { userAuthenticate } from 'reducers/authentication';

export interface IAuthFormFields {
  userName: string;
  password: string;
}

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<IAuthFormFields>({
    userName: '',
    password: '',
  });

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, ...{ [name]: value } });
  };

  const handleSubmit = () => {
    dispatch(userAuthenticate(userData));
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
          required
        />
        <TextField
          name="password"
          onChange={handler}
          value={userData.password}
          label="Password"
          variant="outlined"
          className="input"
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
