import React, { FunctionComponent, useEffect } from 'react';

import App from 'App';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'configs/hooks';

import { getIsAuth } from 'reducers/authentication';

import SignIn from 'ui/sign-in/sign-in';

const Auth: FunctionComponent = () => {
  const navigate = useNavigate();

  const isAuth = useAppSelector(getIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return isAuth ? <App /> : <SignIn />;
};

export default Auth;
