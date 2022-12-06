import { ReactElement } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';

type ProfileActionType = 'logout';

interface IHeaderProfileMenuConfig {
  title: string;
  actionType?: ProfileActionType;
  icon?: ReactElement;
}

export const headerProfileMenuConfig: IHeaderProfileMenuConfig[] = [
  {
    title: 'Log Out',
    actionType: 'logout',
    icon: <LogoutIcon />,
  },
];
