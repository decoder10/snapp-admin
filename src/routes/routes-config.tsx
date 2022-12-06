import React, { ReactElement } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { Navigate, RouteObject } from 'react-router-dom';

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
    path: '*',
    title: 'Not Found',
    element: <NotFound />,
    isMenuItem: false,
  },
];

export const signInRouteConfig: Omit<CustomRouteConfig, 'isMenuItem'>[] = [
  {
    path: 'sign-in',
    title: 'Sign In',
    element: <SignIn />,
  },
  {
    path: '*',
    title: 'Redirect',
    element: <Navigate to="/sign-in" replace />,
  },
];
