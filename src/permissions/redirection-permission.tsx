import React, { FC } from 'react';

export const RedirectionPermission: FC<IPermissionsProps> = ({ permission, children }) => {
  function checkPermission() {
    const permissionList: Permission = [];

    return permissionList.length && permission.some(ele => permissionList.includes(ele));
  }

  return <>{checkPermission() ? children : null}</>;
};
