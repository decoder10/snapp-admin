import { createTheme } from '@mui/material';

export const mainLightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#606C80',
      light: '#8e9aaf',
      dark: '#004ba0',
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
    subtitle1: {
      color: '#000000',
      opacity: 0.6,
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
