import React, { FunctionComponent, useEffect } from 'react';

import App from 'App';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'configs/hooks';

import { getIsAuth } from 'reducers/authentication';
import { getRootLoaderState, setLoaderAction } from 'reducers/root-loader';

import { MemoizedMainLoading } from 'components/main-loading/main-loading';

import SignIn from 'ui/sign-in/sign-in';

const Auth: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getRootLoaderState);

  const isAuth = useAppSelector(getIsAuth);

  useEffect(() => {
    const authPath = window.location.pathname === '/sign-in' ? '/' : window.location.pathname;

    if (!isLoading) {
      navigate(isAuth ? authPath : '/sign-in');
    } else {
      setTimeout(() => dispatch(setLoaderAction(false)), 2000);
    }
  }, [dispatch, isAuth, isLoading, navigate]);

  return isLoading ? <MemoizedMainLoading /> : isAuth ? <App /> : <SignIn />;
};

export default Auth;
