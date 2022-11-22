import { combineReducers } from 'redux';

import testStore from './test-reducer';
import testRequestStore from './test-request-reducer';

export const appReducer = combineReducers({
  testRequestStore,
  testStore,
});
