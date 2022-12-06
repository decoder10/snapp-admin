import React, { FunctionComponent } from 'react';

import { ListItemIcon } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useAppDispatch } from 'configs/hooks';
import { emptyState } from 'configs/local-storage';

import { headerProfileMenuConfig } from 'statics/header/header-profile/header-profile-menu-config';

interface IProps {
  anchorEl: Nullable<HTMLElement>;
  setAnchorEl(state: null): void;
}

const HeaderProfileMenu: FunctionComponent<IProps> = ({ anchorEl, setAnchorEl }) => {
  const dispatch = useAppDispatch();

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = (action: Undefined<string> = '') => {
    setAnchorEl(null);

    switch (action) {
      case 'logout':
        emptyState();
        dispatch({ type: 'LOGOUT' });
        break;
      default:
        break;
    }
  };

  return (
    <Menu anchorEl={anchorEl} keepMounted open={isMenuOpen} onClose={() => handleMenuClose()}>
      {headerProfileMenuConfig.map(item => {
        const { title, icon, actionType } = item;

        return (
          <MenuItem onClick={() => handleMenuClose(actionType)} key={title}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}

            {title}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default HeaderProfileMenu;
