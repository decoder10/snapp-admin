import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';

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
    title: 'divider',
    actionType: 'divider',
  },
  {
    title: 'logOut',
    actionType: 'logout',
  },
];
