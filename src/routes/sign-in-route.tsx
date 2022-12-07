import React, { FC, memo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { signInRouteConfig } from 'routes/routes-config';

const SignInRoute: FC = () => {
  return (
    <Routes>
      {signInRouteConfig.map(item => {
        const { title, path, element } = item;

        return <Route key={title} path={path} element={element} />;
      })}
    </Routes>
  );
};

export const MemorizedSignInRoute = memo(SignInRoute);
