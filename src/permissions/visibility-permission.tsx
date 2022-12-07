import React, { FC } from 'react';

export const VisibilityPermission: FC<IPermissionsProps> = ({ permission, children }) => {
  function checkPermission() {
    const permissionList: Permission = ['edit'];

    return permissionList && permission.some(ele => permissionList.includes(ele));
  }

  return <>{checkPermission() ? children : ''}</>;
};
