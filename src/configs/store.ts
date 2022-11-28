import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { appReducer } from 'reducers';
import logger from 'redux-logger';

import { loadAuthState, saveAuthState } from './local-storage';

export const store = configureStore({
  reducer: appReducer,
  preloadedState: loadAuthState(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const data = store.getState();

  const loggedInUser = { token: '' };

  saveAuthState(data);

  if (loggedInUser) {
    axios.defaults.headers.common.Authorization = `Bearer ${loggedInUser.token}`;
  }
});
