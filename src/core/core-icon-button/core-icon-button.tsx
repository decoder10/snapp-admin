import React, { FC, ReactElement, MouseEvent } from 'react';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

interface IProps {
  size?: 'large' | 'small' | 'medium' | undefined;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  badgeCount?: number;
  className?: string;
  children: ReactElement;
  edge?: false | 'start' | 'end' | undefined;
  variant?: 'standard' | 'dot' | undefined;
  click?(event: MouseEvent<HTMLElement>): void;
}

export const CoreIconButton: FC<IProps> = ({
  size = 'large',
  color = 'error',
  variant = 'standard',
  badgeCount,
  children,
  click,
  edge = false,
  className,
}) => {
  return (
    <IconButton size={size} color="default" onClick={click} edge={edge} className={className}>
      {badgeCount ? (
        <Badge badgeContent={4} color={color} variant={variant}>
          {children}
        </Badge>
      ) : (
        children
      )}
    </IconButton>
  );
};
