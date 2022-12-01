import React, { ReactNode, ReactElement } from 'react';

import { PermissionTypesEnum } from 'enums';
import { AbilityPermission } from 'permissions/ability-permission';
import { RedirectionPermission } from 'permissions/redirection-permission';
import { VisibilityPermission } from 'permissions/visibility-permission';

interface IWrapperProps {
  wrapper: PermissionTypesEnum;
  permission: Permission;
  children: ReactNode;
}

export interface ICheckerArgs {
  userPermissions: Permission;
  permissions: Permission;
  fetcher(): void;
}

interface IFilterCheckerArgs<T> {
  userPermissions: Permission;
  list: T[];
  key: keyof T;
}

export const PermissionWrapper = (props: IWrapperProps): Nullable<ReactElement> => {
  const { wrapper, permission, children } = props;

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

PermissionWrapper.checker = (props: ICheckerArgs): void => {
  const { permissions, userPermissions, fetcher } = props;

  const granted = permissions.some(permission => userPermissions.includes(permission));

  granted && fetcher();
};

PermissionWrapper.dataFilterChecker = <T extends object>(props: IFilterCheckerArgs<T>): T[] => {
  const { userPermissions, list, key } = props;

  const filteredArray: T[] = [];

  list.forEach(listItem => {
    if (listItem[key]) {
      const filterResult = (listItem[key] as Array<string>).some(
        (item: string) => userPermissions && userPermissions.includes(item),
      );

      if (filterResult) {
        filteredArray.push(listItem);
      }
    } else {
      filteredArray.push(listItem);
    }
  });

  return filteredArray;
};
