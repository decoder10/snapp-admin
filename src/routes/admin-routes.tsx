import { FunctionComponent } from 'react';

import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import Dashboard from 'ui/dashboard/dashboard';
import NotFound from 'ui/not-found/not-found';
import SignIn from 'ui/sign-in/sign-in';

type CustomRouteConfig = RouteObject & { permission: string[]; isMenuItem: boolean };

const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    element: <Dashboard />,
    permission: ['edit'],
    isMenuItem: false,
  },
  {
    path: '*',
    element: <NotFound />,
    permission: ['edit'],
    isMenuItem: false,
  },
  {
    path: 'sign-in',
    element: <SignIn />,
    permission: ['edit'],
    isMenuItem: false,
  },
];

const AdminRoutes: FunctionComponent = () => {
  const router = createBrowserRouter(routeConfig);

  return <RouterProvider router={router} />;
};

export default AdminRoutes;
