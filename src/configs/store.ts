import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootReducer } from 'reducers';
import logger from 'redux-logger';

import { useLocalStorage } from 'hooks/use-local-storage';

import { loadAuthState, saveAuthState } from 'configs/auth-storage';

const menuState = JSON.parse(localStorage.getItem('menuState') || '{}');

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: { ...loadAuthState(), ...menuState },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const [addLocalStorage] = useLocalStorage();
  const data = store.getState();

  if (data.menuStateStore) {
    addLocalStorage('menuState', { menuStateStore: data.menuStateStore || { opened: true } });
  }

  if (data.authenticationStore) {
    const loggedInUser = data.authenticationStore.authentication;

    saveAuthState(data);

    if (loggedInUser) {
      axios.defaults.headers.common.Authorization = `Bearer ${loggedInUser.token}`;
    }
  }
});
