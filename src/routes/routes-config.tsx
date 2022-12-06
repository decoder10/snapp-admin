import { ReactElement } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { RouteObject } from 'react-router-dom';

import Dashboard from 'ui/dashboard/dashboard';
import NotFound from 'ui/not-found/not-found';
import SignIn from 'ui/sign-in/sign-in';

export type CustomRouteConfig = RouteObject & {
  permission?: Permission;
  isMenuItem: boolean;
  title: string;
  icon?: ReactElement;
};

export const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    title: 'Dashboard',
    element: <Dashboard />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <DashboardIcon />,
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    element: <SignIn />,
    isMenuItem: false,
  },
  {
    path: '*',
    title: 'Not Found',
    element: <NotFound />,
    isMenuItem: false,
  },
];
