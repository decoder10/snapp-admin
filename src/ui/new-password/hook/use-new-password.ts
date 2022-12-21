import { useState } from 'react';

import _ from 'lodash';
// import { useNavigate } from 'react-router-dom';

import { NewPasswordValidator } from 'ui/new-password/validator/new-password-validator';

export const useNewPassword = (): readonly [
  setNewPassword: (forgotPasswordData: IForgotPasswordFormFields) => void,
  errors: Partial<IForgotPasswordFormFields>,
  setErrors: (
    value:
      | ((prevState: Partial<IForgotPasswordFormFields>) => Partial<IForgotPasswordFormFields>)
      | Partial<IForgotPasswordFormFields>,
  ) => void,
] => {
  // const navigate = useNavigate();

  const [errors, setErrors] = useState<Partial<IForgotPasswordFormFields>>({});

  const validator = new NewPasswordValidator();

  const setNewPassword = (forgotPasswordData: IForgotPasswordFormFields) => {
    const err = validator.validate(forgotPasswordData);

    if (_.size(err) === 0) {
      // to be continued
      // navigate('/sign-in');
    } else {
      setErrors(err as IForgotPasswordFormFields);
    }
  };

  return [setNewPassword, errors, setErrors] as const;
};
