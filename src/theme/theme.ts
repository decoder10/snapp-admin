import { createTheme } from '@mui/material';

export const mainLightTheme = createTheme({
  palette: {
    primary: {
      main: '#407aff',
      light: '#6694FF',
      dark: '#2C55B2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: '#F73378',
      dark: '#AB003C',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#EFF1F2',
    },
    text: {
      primary: '#0000',
      secondary: '#333333',
      disabled: '#606C80',
    },
  },
});

export const mainDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
