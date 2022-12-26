import React, { FC, MouseEvent, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { ListItemIcon, Typography, Menu, MenuItem, Stack, Divider } from '@mui/material';
import { ProfileActionTypesEnum } from 'enums/enums';
import { useNavigate } from 'react-router-dom';

import { useLogOut } from 'hooks/use-logout';

import { CoreAvatar } from 'core/core-avatar/core-avatar';
import { CoreIconButton } from 'core/core-icon-button/core-icon-button';

import { headerProfileMenuConfig } from 'statics/header/header-profile/header-profile-menu-config';

const HeaderProfile: FC = () => {
  const navigate = useNavigate();
  const { logOut } = useLogOut();

  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = (action: Undefined<string> = '', link?: Undefined<string>) => {
    setAnchorEl(null);

    switch (action) {
      case ProfileActionTypesEnum.logout:
        logOut();
        break;
      case ProfileActionTypesEnum.navigate:
        link && navigate(link);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2} alignItems={'center'}>
        <CoreIconButton
          size="small"
          children={<CoreAvatar />}
          click={(event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
          edge={'end'}
        />
        <div
          onClick={(event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
          style={{ cursor: 'pointer' }}
        >
          <Typography variant="h1" fontSize="12px" fontWeight="800" lineHeight="16px">
            Jackson D.
          </Typography>
          <Typography variant="body2" fontSize="10px" fontWeight="500" lineHeight="12px">
            Mananger
          </Typography>
        </div>
      </Stack>

      <Menu anchorEl={anchorEl} keepMounted open={isMenuOpen} onClose={() => handleMenuClose()} sx={{ width: '200px' }}>
        <Divider />

        {headerProfileMenuConfig.map(item => {
          const { title, icon, actionType, link, component } = item;

          return actionType === ProfileActionTypesEnum.divider ? (
            component
          ) : (
            <MenuItem onClick={() => handleMenuClose(actionType, link)} key={title}>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}

              {tKeys(title || '')}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default HeaderProfile;
