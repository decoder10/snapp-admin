import React, { FC } from 'react';

import { tKeys } from 'translations/translation-keys';

import { ListItemIcon } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useLogOut } from 'hooks/use-logout';

import { headerProfileMenuConfig } from 'statics/header/header-profile/header-profile-menu-config';

interface IProps {
  anchorEl: Nullable<HTMLElement>;
  setAnchorEl(state: null): void;
}

const HeaderProfileMenu: FC<IProps> = ({ anchorEl, setAnchorEl }) => {
  const { logOut } = useLogOut();

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = (action: Undefined<string> = '') => {
    setAnchorEl(null);

    switch (action) {
      case 'logout':
        logOut();
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

            {tKeys(title)}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default HeaderProfileMenu;
