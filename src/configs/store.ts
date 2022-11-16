import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { appReducer } from '../reducers';

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
