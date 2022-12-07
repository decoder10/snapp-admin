import React, { FC, ReactElement, MouseEvent } from 'react';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

interface IProps {
  size?: 'large' | 'small' | 'medium' | undefined;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  badgeCount?: number;
  children: ReactElement;
  edge?: false | 'start' | 'end' | undefined;
  click?(event: MouseEvent<HTMLElement>): void;
}

export const CoreIconButton: FC<IProps> = ({
  size = 'large',
  color = 'error',
  badgeCount,
  children,
  click,
  edge = false,
}) => {
  return (
    <IconButton size={size} color="inherit" onClick={click} edge={edge}>
      {badgeCount ? (
        <Badge badgeContent={4} color={color}>
          {children}
        </Badge>
      ) : (
        children
      )}
    </IconButton>
  );
};
