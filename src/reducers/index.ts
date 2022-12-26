import { AnyAction, combineReducers, Reducer } from 'redux';

import authenticationStore from './authentication';
import languageIdStore from './language';
import menuStateStore from './menu-state';
import rootLoaderStore from './root-loader';

export const appReducer = combineReducers({
  authenticationStore,
  rootLoaderStore,
  menuStateStore,
  languageIdStore,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  let newState: RootState = state;

  if (action.type === 'LOGOUT') {
    newState = {} as RootState;
  }

  return appReducer(newState, action);
};
