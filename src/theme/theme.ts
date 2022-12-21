import React from 'react';

import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

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
  },
  typography: {
    body1: {
      color: '#000000',
    },
    body2: {
      color: '#333333',
    },
    body3: {
      color: '#333333',
      opacity: 0.7,
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
