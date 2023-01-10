import { ThemeProvider } from '@mui/material';
import Auth from 'Auth';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mainLightTheme } from 'theme/theme';

import { store } from 'configs/store';

import { MemoizedLoader } from 'statics/statics';

import 'assets/styles/admin.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={mainLightTheme}>
          <Auth />
        </ThemeProvider>
      </BrowserRouter>
    </SnackbarProvider>

    <MemoizedLoader />
  </Provider>,
);
