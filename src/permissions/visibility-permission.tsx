import React from 'react';

export const VisibilityPermission: React.FC<IPermissionsProps> = ({ permission, children }) => {
  function checkPermission() {
    const permissionList = ['edit'];

    return permissionList && permission.some(ele => permissionList.includes(ele));
  }

  return <>{checkPermission() ? children : ''}</>;
};
