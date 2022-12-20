export const useLocalStorage = (): readonly [
  addLocalStorage: (name: string, state: Undefined<object>) => void,
  getLocalStorage: (name: string) => Record<string, unknown>,
  removeLocalStorage: (name: string) => void,
] => {
  const addLocalStorage = (name: string, state: Undefined<object>) => {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(name, serializedState);
  };

  const removeLocalStorage = (name: string) => {
    localStorage.removeItem(name);
  };

  const getLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || '{}');

  return [addLocalStorage, getLocalStorage, removeLocalStorage] as const;
};
