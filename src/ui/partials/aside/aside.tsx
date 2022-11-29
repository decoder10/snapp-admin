import { FunctionComponent } from 'react';

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

import { routeConfig } from 'routes/routes-config';

import Nav from 'ui/partials/nav/nav';

const Aside: FunctionComponent = () => {
  return (
    <aside>
      <Drawer variant="permanent" open={false}>
        <List>
          {routeConfig.map((item, index) => {
            const { title, path } = item;

            return (
              <ListItem key={title} disablePadding sx={{ display: 'block' }}>
                <NavLink to={path}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Nav />
    </aside>
  );
};

export default Aside;
