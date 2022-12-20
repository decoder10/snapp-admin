import { IAuthenticationState } from 'reducers/authentication';

export const loadAuthState = () => {
  const isRememberAuth = JSON.parse(localStorage.getItem('rememberMe') || '{}').rememberMe;

  try {
    const serializedState = isRememberAuth
      ? localStorage.getItem('authState')
      : window.sessionStorage.getItem('authState');

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveAuthState = ({ authenticationStore }: { authenticationStore: IAuthenticationState }) => {
  const isRememberAuth = JSON.parse(localStorage.getItem('rememberMe') || '{}').rememberMe;

  try {
    const { authentication } = authenticationStore;

    if (authentication) {
      const serializedState = JSON.stringify({
        authenticationStore,
      });

      if (isRememberAuth) {
        localStorage.setItem('authState', serializedState);
      } else {
        window.sessionStorage.setItem('authState', serializedState);
      }
    }
  } catch (e) {
    // ignore errors
  }
};

export const emptyAuthState = () => {
  localStorage.removeItem('authState');
  window.sessionStorage.removeItem('authState');
};
