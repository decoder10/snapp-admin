import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'reducers';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
