import { useState } from 'react';

import _ from 'lodash';

import { useAppDispatch } from 'hooks/hooks';

import { userAuthenticate } from 'reducers/authentication';

import { SignInValidator } from 'ui/sign-in/validator/sign-in-validator';

export const useSignIn = (): [(userData: IAuthFormFields) => void, Partial<IAuthFormFields>] => {
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<Partial<IAuthFormFields>>({});

  const validator = new SignInValidator();

  const signIn = (userData: IAuthFormFields) => {
    const err = validator.validate(userData);

    if (_.size(err) === 0) {
      dispatch(userAuthenticate(userData));
    } else {
      setErrors(err as IAuthFormFields);
    }
  };

  return [signIn, errors];
};
