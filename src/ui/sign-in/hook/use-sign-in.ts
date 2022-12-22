import { useState } from 'react';

import _ from 'lodash';

import { useAppDispatch } from 'hooks/hooks';
import { useLocalStorage } from 'hooks/use-local-storage';

import { userAuthenticate } from 'reducers/authentication';

import { SignInValidator } from 'ui/sign-in/validator/sign-in-validator';

type TSignIn = (userData: IAuthFormFields, rememberMe: boolean) => void;
type TSetErrors = (
  value: ((prevState: Partial<IAuthFormFields>) => Partial<IAuthFormFields>) | Partial<IAuthFormFields>,
) => void;

export const useSignIn = (): readonly [signIn: TSignIn, errors: Partial<IAuthFormFields>, setErrors: TSetErrors] => {
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<Partial<IAuthFormFields>>({});
  const [addLocalStorage] = useLocalStorage();

  const validator = new SignInValidator();

  const signIn: TSignIn = (userData, rememberMe) => {
    const err = validator.validate(userData);

    addLocalStorage('rememberMe', { rememberMe: rememberMe });

    if (_.size(err) === 0) {
      dispatch(userAuthenticate(userData));
    } else {
      setErrors(err as IAuthFormFields);
    }
  };

  return [signIn, errors, setErrors] as const;
};
