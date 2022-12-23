import { FC, useState, MouseEvent, memo } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { getMenuState, setMenuStateAction } from 'reducers/menu-state';

import { CoreAvatar, CoreIconButton } from 'core/core';

import HeaderProfileMenu from 'statics/header/header-profile/header-profile-menu';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const menuState = useAppSelector(getMenuState);

  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);

  return (
    <header className={`main-header ${menuState ? 'opened' : 'closed'}`}>
      <CoreIconButton
        className="header-menu-icon"
        children={menuState ? <MenuOpenIcon /> : <MenuIcon />}
        click={() => dispatch(setMenuStateAction(!menuState))}
        edge={'start'}
      />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" spacing={2} alignItems={'center'}>
        <CoreIconButton
          size="small"
          children={<CoreAvatar />}
          click={(event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
          edge={'end'}
        />
      </Stack>
      <HeaderProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </header>
  );
};

export const MemoizedHeader = memo(Header);
