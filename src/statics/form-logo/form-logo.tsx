import { FC, memo } from 'react';

import logo from 'assets/images/logo.svg';

const FormLogo: FC = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo-img" src={logo} alt="logo" />
    </div>
  );
};

export const MemoizedFormLogo = memo(FormLogo);
