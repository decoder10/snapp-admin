import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    title: 'logOut',
    actionType: 'logout',
  },
];
