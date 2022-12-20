import { useAppDispatch } from 'hooks/hooks';
import { useLocalStorage } from 'hooks/use-local-storage';

import { emptyAuthState } from 'configs/auth-storage';

export const useLogOut = (): [() => void] => {
  const dispatch = useAppDispatch();
  const [addLocalStorage] = useLocalStorage();

  const logOut = () => {
    emptyAuthState();
    addLocalStorage('rememberMe', { rememberMe: false });
    dispatch({ type: 'LOGOUT' });
  };

  return [logOut];
};
