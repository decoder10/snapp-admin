import { useState } from 'react';

import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import { OtpValidator } from 'ui/forgot-password/validator/otp-validator';

type TCheckOtp = (otp: IOtp) => void;
type TSetError = (value: ((prevState: Partial<IOtp>) => Partial<IOtp>) | Partial<IOtp>) => void;

export const useCheckOtp = (): {
  readonly checkOtp: TCheckOtp;
  readonly error: Partial<IOtp>;
  readonly setError: TSetError;
} => {
  const navigate = useNavigate();

  const [error, setError] = useState<Partial<IOtp>>({});

  const validator = new OtpValidator();

  const checkOtp: TCheckOtp = otp => {
    const err = validator.validate(otp);

    if (_.size(err) === 0) {
      navigate('/new-password');
    } else {
      setError(err as IOtp);
    }
  };

  return { checkOtp, error, setError };
};
