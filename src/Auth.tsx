import React, { FC, useEffect } from 'react';

import App from 'App';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { MemorizedSignInRoute } from 'routes/sign-in-route';

import { getIsAuth } from 'reducers/authentication';
import { getRootLoaderState, setLoaderAction } from 'reducers/root-loader';

import { MemoizedMainLoading } from 'statics/statics';

const Auth: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getRootLoaderState);

  const isAuth = useAppSelector(getIsAuth);

  useEffect(() => {
    setTimeout(() => dispatch(setLoaderAction(false)), 2000);
  }, [dispatch, isAuth]);

  return isLoading ? <MemoizedMainLoading /> : isAuth ? <App /> : <MemorizedSignInRoute />;
};

export default Auth;
