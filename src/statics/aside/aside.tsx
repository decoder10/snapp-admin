import { FC, memo } from 'react';

import { tKeys } from 'translations/translation-keys';

import { useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/hooks';

import { routeConfig } from 'routes/routes-config';

import { getMenuState } from 'reducers/menu-state';

const Aside: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const primaryColor = theme.palette.primary;

  const menuState = useAppSelector(getMenuState);

  return (
    <aside
      className={`main-sidebar  ${menuState ? 'opened' : 'closed'}`}
      style={{ backgroundColor: primaryColor.main }}
    >
      <nav aria-label="main navigation">
        <List>
          {routeConfig.map(item => {
            const { title, path, isMenuItem, icon } = item;

            const isActive = location.pathname === path;

            return isMenuItem ? (
              <ListItem key={title} disablePadding>
                <ListItemButton
                  onClick={() => navigate(path || '/')}
                  selected={isActive}
                  style={{ backgroundColor: isActive ? primaryColor.dark : 'transparent' }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={tKeys(title)}
                    className={`${menuState ? '' : 'visible-hidden'}`}
                    style={{ color: 'white' }}
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
