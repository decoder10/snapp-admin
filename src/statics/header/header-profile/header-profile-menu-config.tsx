import { ReactElement } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider } from '@mui/material';
import { ProfileActionTypesEnum } from 'enums/enums';

export type ProfileActionTypes = 'logout' | 'navigate' | 'divider';

interface IHeaderProfileMenuConfig {
  title?: string;
  link?: string;
  actionType?: keyof typeof ProfileActionTypesEnum;
  icon?: ReactElement;
  component?: ReactElement;
}

export const headerProfileMenuConfig: IHeaderProfileMenuConfig[] = [
  {
    title: 'settings',
    actionType: 'navigate',
    link: '/settings',
    icon: <SettingsIcon />,
  },
  {
    title: 'profile',
    actionType: 'navigate',
    link: '/profile',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'billing',
    actionType: 'navigate',
    link: '/billing',
    icon: <CreditCardIcon />,
  },
  {
    component: <Divider />,
    actionType: 'divider',
  },
  {
    title: 'logOut',
    actionType: 'logout',
  },
];
