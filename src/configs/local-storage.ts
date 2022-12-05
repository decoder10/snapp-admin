import { AxiosResponse } from 'axios';

import { IAuthenticationState } from 'reducers/authentication';

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

export const saveAuthState = ({ authenticationStore }: { authenticationStore: IAuthenticationState }) => {
  try {
    const { authentication } = authenticationStore;

    if (authentication) {
      const serializedState = JSON.stringify({
        authenticationStore,
      });

      localStorage.setItem('authState', serializedState);
    }
  } catch (e) {
    // ignore errors
  }
};

export const emptyState = () => {
  localStorage.removeItem('authState');
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
