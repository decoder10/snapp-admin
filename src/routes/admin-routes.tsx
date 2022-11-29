import { FunctionComponent } from 'react';

import { PermissionWrapper } from 'permissions/permission-wrapper';
import { Routes, Route } from 'react-router-dom';

import { CustomRouteConfig, routeConfig } from 'routes/routes-config';

const AdminRoutes: FunctionComponent = () => {
  const filteredData: CustomRouteConfig[] = PermissionWrapper.dataFilterChecker({
    userPermissions: ['edit'],
    list: routeConfig,
    key: 'permission',
  });

  return (
    <div>
      <Routes>
        {filteredData.map(item => {
          const { title, path, element } = item;

          return <Route key={title} path={path} element={element} />;
        })}
      </Routes>
    </div>
  );
};

export default AdminRoutes;
