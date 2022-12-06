import React, { FunctionComponent, memo } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import SignIn from 'ui/sign-in/sign-in';

const SignInRoute: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
};

export const MemorizedSignInRoute = memo(SignInRoute);
