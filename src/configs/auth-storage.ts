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

export const emptyAuthState = () => {
  localStorage.removeItem('authState');
};
