import React from 'react';

export const RedirectionPermission: React.FC<IPermissionsProps> = ({ permission, children }) => {
  function checkPermission() {
    const permissionList = [];

    return permissionList.length && permission.some(ele => permissionList.includes(ele));
  }

  return <>{checkPermission() ? children : null}</>;
};
