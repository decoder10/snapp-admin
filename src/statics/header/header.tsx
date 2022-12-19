import { FC, useState, MouseEvent, memo } from 'react';

import { AccountCircle } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { createTheme, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { getMenuState, setMenuStateAction } from 'reducers/menu-state';

import { CoreIconButton, CoreSearch } from 'core/core';

import HeaderProfileMenu from 'statics/header/header-profile/header-profile-menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const menuState = useAppSelector(getMenuState);

  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Toolbar>
            <CoreIconButton
              children={menuState ? <MenuOpenIcon /> : <MenuIcon />}
              click={() => dispatch(setMenuStateAction(!menuState))}
              edge={'start'}
            />

            <Typography variant="h6" noWrap component="div">
              SNAPP
            </Typography>

            <CoreSearch />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <CoreIconButton children={<MailIcon />} badgeCount={4} />

              <CoreIconButton children={<NotificationsIcon />} badgeCount={17} />

              <CoreIconButton
                children={<AccountCircle />}
                click={(event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
                edge={'end'}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <HeaderProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
};

export const MemoizedHeader = memo(Header);
