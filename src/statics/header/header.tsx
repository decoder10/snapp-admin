import { FC, memo } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { getMenuState, setMenuStateAction } from 'reducers/menu-state';

import { CoreIconButton } from 'core/core';

import HeaderLanguageSelect from 'statics/header/header-language-select/header-language-select';
import HeaderProfile from 'statics/header/header-profile/header-profile';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const menuState = useAppSelector(getMenuState);

  return (
    <header className={`main-header ${menuState ? 'opened' : 'closed'}`}>
      <CoreIconButton
        className="header-menu-icon"
        children={menuState ? <MenuOpenIcon /> : <MenuIcon />}
        click={() => dispatch(setMenuStateAction(!menuState))}
        edge={'start'}
      />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" spacing={3} alignItems={'center'}>
        <HeaderProfile />

        <HeaderLanguageSelect />
      </Stack>
    </header>
  );
};

export const MemoizedHeader = memo(Header);
