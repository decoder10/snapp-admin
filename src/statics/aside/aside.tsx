import { FC, memo } from 'react';

import { tKeys } from 'translations/translation-keys';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/hooks';

import { routeConfig } from 'routes/routes-config';

import { getMenuState } from 'reducers/menu-state';

import asideHeaderLogo from 'assets/images/header-logo-compact.svg';

const Aside: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const menuState = useAppSelector(getMenuState);

  const menuStateClassNames = menuState ? 'opened' : 'closed';

  return (
    <aside className={`main-sidebar  ${menuStateClassNames}`}>
      <header className={`aside-header  ${menuStateClassNames}`}>
        <img src={asideHeaderLogo} alt="Snapp logo" />

        <Typography
          variant="body1"
          fontSize="14px"
          fontWeight="700"
          marginLeft="16px"
          className={`${menuState ? '' : 'hide'}`}
        >
          Snapp Dashboard
        </Typography>
      </header>

      <nav aria-label="main navigation">
        <List>
          {routeConfig.map(item => {
            const { title, path, isMenuItem, icon } = item;

            const isActive = location.pathname === path;

            return isMenuItem ? (
              <ListItem key={title} disablePadding className={menuStateClassNames}>
                <ListItemButton
                  onClick={() => navigate(path || '/')}
                  selected={isActive}
                  style={{ backgroundColor: isActive ? 'white' : 'transparent' }}
                >
                  <ListItemIcon sx={{ color: isActive ? primaryColor : secondaryColor }}>{icon}</ListItemIcon>

                  <ListItemText
                    id={title}
                    primary={tKeys(title)}
                    sx={{ margin: 0 }}
                    className={`${menuState ? '' : 'hide'} ${isActive ? 'active' : ''}`}
                  />
                </ListItemButton>
              </ListItem>
            ) : null;
          })}
        </List>
      </nav>
    </aside>
  );
};

export const MemoizedAside = memo(Aside);
