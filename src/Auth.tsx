import React, { FunctionComponent, useEffect } from 'react';

import App from 'App';

import { useAppDispatch, useAppSelector } from 'configs/hooks';

import { getIsAuth } from 'reducers/authentication';
import { getRootLoaderState, setLoaderAction } from 'reducers/root-loader';

import { MemoizedMainLoading } from 'components/main-loading/main-loading';

import SignIn from 'ui/sign-in/sign-in';

const Auth: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getRootLoaderState);

  const isAuth = useAppSelector(getIsAuth);

  useEffect(() => {
    setTimeout(() => dispatch(setLoaderAction(false)), 2000);
  }, [dispatch]);

  return isLoading ? <MemoizedMainLoading /> : isAuth ? <App /> : <SignIn />;
};

export default Auth;
