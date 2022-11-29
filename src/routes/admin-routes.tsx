import { FunctionComponent } from 'react';

import { PermissionWrapper } from 'permissions/permission-wrapper';
import { Routes, Route } from 'react-router-dom';

import { CustomRouteConfig, routeConfig } from 'routes/routes-config';

const AdminRoutes: FunctionComponent = () => {
  const filteredData = PermissionWrapper.dataFilterChecker<CustomRouteConfig>({
    userPermissions: ['edit'],
    list: routeConfig,
    key: 'permission',
  });

  return (
    <Routes>
      {filteredData.map(item => {
        const { title, path, element } = item;

        return <Route key={title} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default AdminRoutes;
