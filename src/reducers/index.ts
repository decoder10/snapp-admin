import { AnyAction, combineReducers, Reducer } from 'redux';

import authenticationStore from './authentication';

export const appReducer = combineReducers({
  authenticationStore,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  let newState: RootState = state;

  if (action.type === 'LOGOUT') {
    newState = {} as RootState;
  }

  return appReducer(newState, action);
};
