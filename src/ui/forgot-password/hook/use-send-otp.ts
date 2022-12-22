import { useState } from 'react';

import _ from 'lodash';

import { ForgotPasswordEmailValidator } from 'ui/forgot-password/validator/forgot-password-email-validator';

type TSendOtp = (email: IForgotPasswordEmail, changeStep: (value: boolean) => void) => void;
type TSetError = (
  value: ((prevState: Partial<IForgotPasswordEmail>) => Partial<IForgotPasswordEmail>) | Partial<IForgotPasswordEmail>,
) => void;

export const useSendOtp = (): readonly [
  sendOtp: TSendOtp,
  error: Partial<IForgotPasswordEmail>,
  setError: TSetError,
] => {
  const [error, setError] = useState<Partial<IForgotPasswordEmail>>({});

  const validator = new ForgotPasswordEmailValidator();

  const sendOtp: TSendOtp = (email, changeStep) => {
    const err = validator.validate(email);

    if (_.size(err) === 0) {
      changeStep(true);
    } else {
      setError(err as IForgotPasswordEmail);
    }
  };

  return [sendOtp, error, setError] as const;
};
