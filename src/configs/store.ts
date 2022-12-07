import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootReducer } from 'reducers';
import logger from 'redux-logger';

import { loadAuthState, loadLocalStorage, saveAuthState, saveLocalStorage } from './local-storage';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: { ...loadAuthState(), ...loadLocalStorage('menuState') },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const data = store.getState();

  if (data.menuStateStore) {
    saveLocalStorage('menuState', { menuStateStore: data.menuStateStore });
  }

  if (data.authenticationStore) {
    const loggedInUser = data.authenticationStore.authentication;

    saveAuthState(data);

    if (loggedInUser) {
      axios.defaults.headers.common.Authorization = `Bearer ${loggedInUser.token}`;
    }
  }
});
