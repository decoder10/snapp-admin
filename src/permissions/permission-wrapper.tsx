import React, { ReactNode, ReactElement } from 'react';

import { PermissionTypesEnum } from 'enums';
import { AbilityPermission } from 'permissions/ability-permission';
import { RedirectionPermission } from 'permissions/redirection-permission';
import { VisibilityPermission } from 'permissions/visibility-permission';

interface IWrapperProps {
  wrapper: PermissionTypesEnum;
  permission: Nullable<Array<string>>;
  children: ReactNode;
}

interface ICheckerArgs {
  userPermissions: Nullable<Array<string>>;
  permissions: Nullable<Array<string>>;
  fetcher: () => void;
}

interface IFilterCheckerArgs {
  userPermissions: Nullable<Array<string>>;
  list: Nullable<Array<object>>;
  key: string;
}

export const PermissionWrapper = ({ wrapper, permission, children }: IWrapperProps): ReactElement => {
  switch (wrapper) {
    case PermissionTypesEnum.visibility:
      return <VisibilityPermission permission={permission}>{children}</VisibilityPermission>;
    case PermissionTypesEnum.ability:
      return <AbilityPermission permission={permission}>{children}</AbilityPermission>;
    case PermissionTypesEnum.redirect:
      return <RedirectionPermission permission={permission}>{children}</RedirectionPermission>;
    default:
      return null;
  }
};

PermissionWrapper.checker = (...args: ICheckerArgs[]): void => {
  const granted = args[1].permissions.some(permission => args[0].userPermissions.includes(permission));

  granted && args[2].fetcher();
};

PermissionWrapper.dataFilterChecker = (...args: IFilterCheckerArgs[]): Array<object> => {
  const filteredArray = [];
  const userPermissions = args[0].userPermissions;
  const list = args[1].list;
  const key = args[2].key;

  list.forEach(listItem => {
    listItem[key] &&
      listItem[key].some(item => userPermissions && userPermissions.includes(item)) &&
      filteredArray.push(listItem);
  });

  return filteredArray;
};
