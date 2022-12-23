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
      primary: '#000000',
      secondary: '#333333',
      disabled: '#606C80',
    },
  },
  typography: {
    body1: {
      color: '#000000',
    },
    body2: {
      color: '#333333',
    },
  },
});

export const mainTextTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#333333',
    },
  },
});

export const mainDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
