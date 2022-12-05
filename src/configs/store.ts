import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootReducer } from 'reducers';
import logger from 'redux-logger';

import { loadAuthState, saveAuthState } from './local-storage';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadAuthState(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const data = store.getState();

  if (data.authenticationStore) {
    const loggedInUser = data.authenticationStore.authentication;

    saveAuthState(data);

    if (loggedInUser) {
      axios.defaults.headers.common.Authorization = `Bearer ${loggedInUser.token}`;
    }
  }
});
