import { combineReducers } from 'redux';

import btc from './btc-value';
import testStore from './test-reducer';
import testRequestStore from './test-request-reducer';

export const appReducer = combineReducers({
  testRequestStore,
  testStore,
  btc,
});
