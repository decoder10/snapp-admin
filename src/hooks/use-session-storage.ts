export const useSessionStorage = (): readonly [
  addSessionStorage: (name: string, state: Undefined<object>) => void,
  getSessionStorage: (name: string) => Record<string, unknown>,
  removeSessionStorage: (name: string) => void,
] => {
  const addSessionStorage = (name: string, state: Undefined<object>) => {
    const serializedState = JSON.stringify(state);

    window.sessionStorage.setItem(name, serializedState);
  };

  const removeSessionStorage = (name: string) => {
    window.sessionStorage.removeItem(name);
  };

  const getSessionStorage = (name: string) => JSON.parse(window.sessionStorage.getItem(name) || '{}');

  return [addSessionStorage, getSessionStorage, removeSessionStorage] as const;
};
