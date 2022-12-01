import { AxiosResponse } from 'axios';
import { WritableDraft } from 'immer/dist/internal';
import { CombinedState } from 'redux';

import { TestState } from 'reducers/test-reducer';
import { TestRequestState } from 'reducers/test-request-reducer';

export const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('authState');

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveAuthState = (
  state: CombinedState<{ testRequestStore: WritableDraft<TestRequestState>; testStore: TestState }>,
) => {
  try {
    // const { authentication } = state;
    //
    // if (authentication.loggedInUser) {
    //   const serializedState = JSON.stringify({
    //     authentication,
    //   });
    //
    //   localStorage.setItem('state', serializedState);
    // }
  } catch (e) {
    // ignore errors
  }
};

export const saveLocalStorage = (
  name: string,
  state: Record<string, unknown> | string | AxiosResponse<IKeyValueObject>,
) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem(name, serializedState);
};

export const loadLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || '{}');

export const saveSessionStorage = (name: string, state: Record<string, unknown> | string) => {
  const serializedState = JSON.stringify(state);
  window.sessionStorage.setItem(name, serializedState);
};

export const loadSessionStorage = (name: string) => JSON.parse(window.sessionStorage.getItem(name) || '{}');
