import { FunctionComponent } from 'react';

import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import Dashboard from 'ui/dashboard/dashboard';
import NotFound from 'ui/not-found/not-found';

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
];

const AdminRoutes: FunctionComponent = () => {
  const router = createBrowserRouter(routeConfig);

  return <RouterProvider router={router} />;
};

export default AdminRoutes;
