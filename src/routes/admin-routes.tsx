import { FunctionComponent } from 'react';

import { PermissionWrapper } from 'permissions/permission-wrapper';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import Dashboard from 'ui/dashboard/dashboard';
import NotFound from 'ui/not-found/not-found';
import SignIn from 'ui/sign-in/sign-in';

type CustomRouteConfig = RouteObject & { permission?: string[]; isMenuItem: boolean };

const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    element: <Dashboard />,
    permission: ['edit'],
    isMenuItem: false,
  },
  {
    path: 'sign-in',
    element: <SignIn />,
    isMenuItem: false,
  },
  {
    path: '*',
    element: <NotFound />,
    isMenuItem: false,
  },
];

const AdminRoutes: FunctionComponent = () => {
  const filteredData = PermissionWrapper.dataFilterChecker({
    userPermissions: ['edit'],
    list: routeConfig,
    key: 'permission',
  });

  const router = createBrowserRouter(filteredData);

  return <RouterProvider router={router} />;
};

export default AdminRoutes;
