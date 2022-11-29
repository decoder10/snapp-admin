import React, { FunctionComponent, useEffect, useState } from 'react';

import App from 'App';

import MainLoading from 'components/main-loading/main-loading';

const Auth: FunctionComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsAuth(false), 2000);
  }, []);

  return isAuth ? <MainLoading /> : <App />;
};

export default Auth;
