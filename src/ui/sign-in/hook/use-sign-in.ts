import { useState } from 'react';

import _ from 'lodash';

import { useAppDispatch } from 'hooks/hooks';
import { useLocalStorage } from 'hooks/use-local-storage';

import { userAuthenticate } from 'reducers/authentication';

import { SignInValidator } from 'ui/sign-in/validator/sign-in-validator';

export const useSignIn = (): readonly [
  (userData: IAuthFormFields, rememberMe: boolean) => Promise<void>,
  Partial<IAuthFormFields>,
  (value: ((prevState: Partial<IAuthFormFields>) => Partial<IAuthFormFields>) | Partial<IAuthFormFields>) => void,
] => {
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<Partial<IAuthFormFields>>({});
  const [addLocalStorage] = useLocalStorage();

  const validator = new SignInValidator();

  const signIn = async (userData: IAuthFormFields, rememberMe: boolean) => {
    const err = validator.validate(userData);

    await addLocalStorage('rememberMe', { rememberMe: rememberMe });

    if (_.size(err) === 0) {
      dispatch(userAuthenticate(userData));
    } else {
      setErrors(err as IAuthFormFields);
    }
  };

  return [signIn, errors, setErrors] as const;
};
