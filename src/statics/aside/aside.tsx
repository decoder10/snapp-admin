import { FunctionComponent } from 'react';

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import { routeConfig } from 'routes/routes-config';

const Aside: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <aside className="main-sidebar">
      <List>
        {routeConfig.map((item, index) => {
          const { title, path, isMenuItem } = item;

          return isMenuItem ? (
            <ListItem key={title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
                onClick={() => navigate(path || '/')}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ) : null;
        })}
      </List>
    </aside>
  );
};

export default Aside;
