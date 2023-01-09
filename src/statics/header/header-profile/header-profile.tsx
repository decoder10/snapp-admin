import React, { FC, useRef, useState } from 'react';

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

  const profileRef = useRef(null);

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
      <Stack direction="row" spacing={2} alignItems={'center'} ref={profileRef}>
        <CoreIconButton
          size="small"
          children={<CoreAvatar />}
          edge={'end'}
          click={() => setAnchorEl(profileRef.current)}
        />

        <div onClick={() => setAnchorEl(profileRef.current)} style={{ cursor: 'pointer' }}>
          <Typography variant="h1" fontSize="12px" fontWeight="800" lineHeight="16px">
            Jackson D.
          </Typography>
          <Typography variant="subtitle1" fontSize="10px" fontWeight="500" lineHeight="12px">
            Mananger
          </Typography>
        </div>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={() => handleMenuClose()}
        PaperProps={{
          sx: {
            minWidth: 200,
          },
        }}
      >
        {headerProfileMenuConfig.map(item => {
          const { title, icon, actionType, link, type } = item;

          return type === 'divider' ? (
            <Divider key={title} />
          ) : (
            <MenuItem onClick={() => handleMenuClose(actionType, link)} key={title}>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}

              <Typography variant="body1" fontSize="14px" fontWeight="400" lineHeight="20px">
                {tKeys(title || '')}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default HeaderProfile;
