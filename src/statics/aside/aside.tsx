import { FunctionComponent, memo } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'configs/hooks';

import { routeConfig } from 'routes/routes-config';

import { getMenuState } from 'reducers/menu-state';

const Aside: FunctionComponent = () => {
  const navigate = useNavigate();

  const menuState = useAppSelector(getMenuState);

  return (
    <aside className={`main-sidebar ${menuState ? 'opened' : 'closed'}`}>
      <nav aria-label="main navigation">
        <List>
          {routeConfig.map((item, index) => {
            const { title, path, isMenuItem, icon } = item;

            return isMenuItem ? (
              <ListItem key={title} disablePadding>
                <ListItemButton onClick={() => navigate(path || '/')}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} className={menuState ? '' : 'visible-hidden'} />
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
