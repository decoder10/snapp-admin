export const useLocalStorage = (): [
  (name: string, state: Undefined<object>) => void,
  (name: string) => void,
  (name: string) => object,
] => {
  const addLocalStorage = (name: string, state: Undefined<object>) => {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(name, serializedState);
  };

  const removeLocalStorage = (name: string) => {
    localStorage.removeItem(name);
  };

  const getLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || '{}');

  return [addLocalStorage, removeLocalStorage, getLocalStorage];
};
