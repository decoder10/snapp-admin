import React from 'react';

export const VisibilityPermission: React.FC<IPermissionsProps> = ({ permission, children }) => {
  function checkPermission() {
    const permissionList: Permission = ['edit'];

    return permissionList && permission.some(ele => permissionList.includes(ele));
  }

  return <>{checkPermission() ? children : ''}</>;
};
