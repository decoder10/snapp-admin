import { ChangeEvent, FC, useState } from 'react';

import { Button, TextField } from '@mui/material';

interface FormFieldsProps {
  userName: string;
  password: string;
}

const SignIn: FC = () => {
  const [userData, setUserData] = useState<FormFieldsProps>({
    userName: '',
    password: '',
  });

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, ...{ [name]: value } });
  };

  const onSubmit = (formFields: FormFieldsProps) => {
    console.log(formFields);
  };

  const handleSubmit = () => {
    onSubmit(userData);
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
